import fetchPonyfill from 'fetch-ponyfill';
const { fetch } = fetchPonyfill();

interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    body?: Record<string, any>;
}

export default class Request {
    private static _authToken: string | undefined;

    public static async fetch<T = {}>(opts: FetchOptions) {
        try {
            const requestOptions: RequestInit = {
                method: opts.method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            };

            if (Request.authToken) {
                requestOptions.headers = {
                    ...requestOptions.headers,
                    Authorization: `Bearer ${Request.authToken}`,
                };
            }

            const response = await fetch(Request.buildURL(opts.url, opts.body), requestOptions);

            Request.checkStatus(response);

            return (await Request.parseResponse(response)) as T;
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

    public static buildURL(url: string, body?: FetchOptions['body']) {
        const params = new URLSearchParams(body);
        const apiUrl = new URL(`https://api.dribbble.com/v2/${url}`.replace(/([^:]\/)\/+/g, '$1'));

        params.forEach((value, key) => apiUrl.searchParams.set(key, value));

        return apiUrl.href;
    }

    private static checkStatus(response: Response) {
        if ([200, 202, 204].includes(response.status)) return;

        let message = response.statusText;

        switch (response.status) {
            case 400:
                message = 'Something went wrong';
        }

        throw new Error(`Dribbblejs - ${response.status}: ${message}`);
    }

    private static async parseResponse(response: Response) {
        const responseClone = response.clone();

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            console.warn('Dribbblejs: issue with parsing response as JSON, returning text');
            return await responseClone.text();
        }
    }
}
