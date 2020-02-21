export interface Project {
    id: number;
    name: string;
    description: string | null;
    shots_count: number;
    created_at: string;
    updated_at: string;
}

export interface Attachment {
    id: number;
    url: string;
    thumbnail_url: string;
    size: number;
    content_type: string;
    created_at: string;
}

export interface Shot {
    animated: boolean;
    description: string;
    height: number;
    html_url: string;
    id: number;
    images: {
        hidpi: string | null;
        one_x?: string;
        two_x?: string;
        normal: string;
        teaser: string;
    };
    low_profile: boolean;
    tags: string[];
    title: string;
    width: number;
    published_at: string;
    updated_at: string;
    attachments: Attachment[];
    projects: Project[];
    video: {
        id: number;
        duration: number;
        video_file_name: string;
        video_file_size: number;
        width: number;
        height: number;
        silent: true;
        created_at: string;
        updated_at: string;
        url: string;
        small_preview_url: string;
        large_preview_url: string;
        xlarge_preview_url: string;
    };
}

export interface User {
    id: number;
    name: string;
    login: string;
    html_url: string;
    avatar_url: string;
    bio: string;
    location: string;
    links: {
        web: string;
        twitter: string;
    };
    can_upload_shot: boolean;
    pro: boolean;
    followers_count: number;
    created_at: string;
    type: string;
    teams: [
        {
            id: number;
            name: string;
            login: string;
            html_url: string;
            avatar_url: string;
            bio: string;
            location: string;
            links: {
                web: string;
                twitter: string;
            };
            type: string;
            created_at: string;
            updated_at: string;
        },
    ];
}
