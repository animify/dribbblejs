import 'whatwg-fetch';

interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    body?: Record<string, any>;
}

export default class Request {
    private static _authToken: string | undefined;

    public static async fetch(opts: FetchOptions) {
        try {
            const requestOptions: RequestInit = {
                method: opts.method,
                body: JSON.stringify(opts.body),
            };

            if (Request.authToken) {
                requestOptions.headers = {
                    ...requestOptions.headers,
                    Authorization: `Bearer ${Request.authToken}`,
                };
            }

            const response = await fetch(Request.buildURL(opts.url), requestOptions);

            Request.checkStatus(response);

            return await Request.parseResponse(response);
        } catch (error) {
            throw error;
        }
    }

    public static get authToken(): string {
        return Request._authToken || '';
    }

    public static set authToken(token: string) {
        Request._authToken = token;
    }

    public static buildURL(url: string) {
        return `https://api.dribbble.com/v2/${url}`.replace(/([^:]\/)\/+/g, '$1');
    }

    private static checkStatus(response: Response) {
        if (response.status === 200) return;

        let message = response.statusText;

        switch (response.status) {
            case 400:
                message = 'Something went wrong 400';
        }

        throw new Error(message);
    }

    private static parseResponse(response: Response) {
        return response.json();
    }
}
