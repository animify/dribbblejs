import 'whatwg-fetch';

interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    body?: Record<string, any>;
}

export default class Request {
    private static _accessToken: string | undefined;

    public static async fetch(opts: FetchOptions) {
        try {
            const response = await fetch(Request.buildURL(opts.url), {
                method: opts.method,
                body: JSON.stringify(opts.body),
                headers: {
                    Authorization: `Bearer ${Request.accessToken}`,
                },
            });

            Request.checkStatus(response);

            return await Request.parseResponse(response);
        } catch (error) {
            throw error;
        }
    }

    public static get accessToken() {
        if (!Request._accessToken) {
            throw new Error('Access token is not defined.');
        }

        return Request._accessToken;
    }

    public static set accessToken(token: string) {
        Request._accessToken = token;
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
