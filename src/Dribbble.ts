import Request from './Request';

interface DribbbleOptions {
    authToken: string;
}

export default class Dribbble {
    constructor(options: DribbbleOptions) {
        Request.authToken = options.authToken;
    }

    public static get projects() {
        return {
            list: () => {
                return Request.fetch({ url: '/user/projects', method: 'GET' });
            },
            create: (body: { name: string; description?: string }) => {
                return Request.fetch({ url: '/projects', method: 'POST', body });
            },
            update: (id: string, body: { name?: string; description?: string }) => {
                return Request.fetch({ url: `/projects/${id}`, method: 'PUT', body });
            },
            delete: (id: string) => {
                return Request.fetch({ url: `/projects/${id}`, method: 'DELETE' });
            },
        };
    }
}
