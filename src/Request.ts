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
            const response = await fetch(Request.buildURL(opts.url), {
                method: opts.method,
                body: JSON.stringify(opts.body),
                headers: {
                    Authorization: `Bearer ${Request.authToken}`,
                },
            });

            Request.checkStatus(response);

            return await Request.parseResponse(response);
        } catch (error) {
            throw error;
        }
    }

    public static get authToken() {
        if (!Request._authToken) {
            throw new Error('Auth token is not defined.');
        }

        return Request._authToken;
    }

    public static set authToken(token: string) {
        Request._authToken = token;
    }

    private static buildURL(url: string) {
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
