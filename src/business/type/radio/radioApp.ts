import { RadioApi, radioApi } from '@/data/type/radio/radioApi';

export interface RadioApp {
    id: RadioApi['id'];
    name: string;
    logo: string;
    genre: string[];
    description: string;
    streamingUrls: string[];
}

export const radioApp: RadioApp = {
    id: radioApi.id,
    name: radioApi.name,
    logo: radioApi.logo44x44,
    genre: radioApi.genres || [],
    description: radioApi.description,
    streamingUrls: radioApi.streams.map((stream) => stream.url),
};
