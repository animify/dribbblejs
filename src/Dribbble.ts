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

    public static get shots() {
        return {
            list: () => {
                return Request.fetch({ url: '/user/shots', method: 'GET' });
            },
            get: (id: string) => {
                return Request.fetch({ url: `/shots/${id}`, method: 'GET' });
            },
            create: (body: {
                image: File;
                title: string;
                description?: string;
                low_profile?: boolean;
                rebound_source_id?: number;
                scheduled_for?: number;
                tags?: string[];
                team_id?: number;
            }) => {
                return Request.fetch({ url: `/shots`, method: 'POST', body });
            },
            update: (
                id: string,
                body: {
                    title?: string;
                    description?: string;
                    low_profile?: boolean;
                    scheduled_for?: number;
                    tags?: string[];
                    team_id?: number;
                },
            ) => {
                return Request.fetch({ url: `/shots/${id}`, method: 'PUT', body });
            },
            delete: (id: string) => {
                return Request.fetch({ url: `/shots/${id}`, method: 'DELETE' });
            },
        };
    }
}
