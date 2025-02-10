import type { RadioApi } from '@/data/type/radio/radioApi';

export interface RadioListApi
    extends Pick<
        RadioApi,
        | 'city'
        | 'country'
        | 'genres'
        | 'id'
        | 'lastModified'
        | 'logo44x44'
        | 'logo100x100'
        | 'logo175x175'
        | 'logo300x300'
        | 'logo630x630'
        | 'logo1200x1200'
        | 'logo2160x2160'
        | 'strikingColor1'
        | 'strikingColor2'
        | 'name'
        | 'streams'
        | 'hasValidStreams'
        | 'adParams'
        | 'type'
        | 'seoRelevantIn'
        | 'relevantIn'
        | 'blockingInformation'
    > {
    // additional fields
    topics?: string[];
}

export interface RadioListApiResponse {
    systemName: string;
    titile: string;
    playables: RadioListApi[];
    displayType: string;
    count: number;
    offset: number;
    totalCount: number;
}
