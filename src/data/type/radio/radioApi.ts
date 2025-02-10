import { RadioFrequencyApi, radioFrequencyApi } from '@/data/type/radio/radioFrequencyApi';
import { RadioStreamApi, radioStreamApi } from '@/data/type/radio/radioStreamApi';
import { RadioTagApi, radioTagApi } from '@/data/type/radio/radioTagApi';
import {
    RadioBlockingInformationApi,
    radioBlockingInformationApi,
} from '@/data/type/radio/radioBlockingInformationApi';

export interface RadioApi {
    id: string;
    name: string;
    lastModified: number;
    logo44x44: string;
    logo100x100: string;
    logo175x175: string;
    logo300x300: string;
    logo630x630: string;
    logo1200x1200: string;
    logo2160x2160: string;
    strikingColor1: string;
    strikingColor2: string;
    hasValidStreams: boolean;
    streams: RadioStreamApi[];
    city?: string;
    country: string;
    genres?: string[];
    type: string;
    description: string;
    homepageUrl: string;
    adParams: string;
    hideReferer: boolean;
    continent: string;
    languages: string[];
    families: string[];
    region: string;
    genreTags: RadioTagApi[];
    cityTag: RadioTagApi;
    parentTag: RadioTagApi;
    familyTag: RadioTagApi;
    languageTags: RadioTagApi[];
    regionTag: RadioTagApi;
    countryTag: RadioTagApi;
    frequencies: RadioFrequencyApi[];
    rank: number;
    shortDescription: string;
    enabled: boolean;
    seoRelevantIn: string[];
    relevantIn: string[];
    aliases: string[];
    blockingInformation: RadioBlockingInformationApi;
}

export type RadioApiResponse = RadioApi[];

// fast mock
export const radioApi: RadioApi = {
    id: 'id',
    name: 'name',
    lastModified: 0,
    logo44x44: 'logo44x44',
    logo100x100: 'logo100x100',
    logo175x175: 'logo175x175',
    logo300x300: 'logo300x300',
    logo630x630: 'logo630x630',
    logo1200x1200: 'logo1200x1200',
    logo2160x2160: 'logo2160x2160',
    strikingColor1: 'strikingColor1',
    strikingColor2: 'strikingColor2',
    hasValidStreams: true,
    streams: [radioStreamApi],
    city: 'city',
    country: 'country',
    genres: ['genres'],
    type: 'type',
    description: 'description',
    homepageUrl: 'homepageUrl',
    adParams: 'adParams',
    hideReferer: true,
    continent: 'continent',
    languages: ['languages'],
    families: ['families'],
    region: 'region',
    genreTags: [radioTagApi],
    cityTag: radioTagApi,
    parentTag: radioTagApi,
    familyTag: radioTagApi,
    languageTags: [radioTagApi],
    regionTag: radioTagApi,
    countryTag: radioTagApi,
    frequencies: [radioFrequencyApi],
    rank: 1,
    shortDescription: 'shortDescription',
    enabled: true,
    seoRelevantIn: ['seoRelevantIn'],
    relevantIn: ['relevantIn'],
    aliases: ['aliases'],
    blockingInformation: radioBlockingInformationApi,
};
