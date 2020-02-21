import Request from './Request';
import {
    ProjectCreateBody,
    ProjectUpdateBody,
    AttachmentsCreateBody,
    ShotsCreateBody,
    ShotsUpdateBody,
    Project,
    Shot,
    User,
} from './types';

interface DribbbleOptions {
    authToken: string;
}

export default class Dribbble {
    constructor(options: DribbbleOptions) {
        Request.authToken = options.authToken;
    }

    public get projects() {
        return {
            list: () => {
                return Request.fetch<Project[]>({ url: '/user/projects', method: 'GET' });
            },
            create: (body: ProjectCreateBody) => {
                return Request.fetch<Project>({ url: '/projects', method: 'POST', body });
            },
            update: (id: string, body: ProjectUpdateBody) => {
                return Request.fetch<Project>({ url: `/projects/${id}`, method: 'PUT', body });
            },
            delete: (id: string) => {
                return Request.fetch<Project>({ url: `/projects/${id}`, method: 'DELETE' });
            },
        };
    }

    public get attachments() {
        return {
            create: (shot: string, body: AttachmentsCreateBody) => {
                return Request.fetch({ url: `/shots/${shot}/attachments`, method: 'POST', body });
            },
            delete: (shot: string, id: string) => {
                return Request.fetch({ url: `/shots/${shot}/attachments/${id}`, method: 'DELETE' });
            },
        };
    }

    public get shots() {
        return {
            list: () => {
                return Request.fetch<Shot[]>({ url: '/user/shots', method: 'GET' });
            },
            get: (id: string) => {
                return Request.fetch<Shot>({ url: `/shots/${id}`, method: 'GET' });
            },
            create: (body: ShotsCreateBody) => {
                return Request.fetch({ url: `/shots`, method: 'POST', body });
            },
            update: (id: string, body: ShotsUpdateBody) => {
                return Request.fetch<Shot>({ url: `/shots/${id}`, method: 'PUT', body });
            },
            delete: (id: string) => {
                return Request.fetch({ url: `/shots/${id}`, method: 'DELETE' });
            },
        };
    }

    public get user() {
        return {
            get: () => {
                return Request.fetch<User>({ url: '/user', method: 'GET' });
            },
        };
    }
}
