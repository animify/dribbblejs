export interface ProjectCreateBody {
    name: string;
    description?: string;
}

export interface ProjectUpdateBody {
    name?: string;
    description?: string;
}

export interface AttachmentsCreateBody {
    file: File;
}

export interface ShotsCreateBody {
    image: File;
    title: string;
    description?: string;
    low_profile?: boolean;
    rebound_source_id?: number;
    scheduled_for?: number;
    tags?: string[];
    team_id?: number;
}

export interface ShotsUpdateBody {
    title?: string;
    description?: string;
    low_profile?: boolean;
    scheduled_for?: number;
    tags?: string[];
    team_id?: number;
}
