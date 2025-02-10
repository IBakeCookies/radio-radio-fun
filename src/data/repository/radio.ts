import type { RadioListApiResponse } from '@/data/type/radio/radioListApi';
import type { RadioApiResponse } from '@/data/type/radio/radioApi';
import { createFetcher } from '@/data/fetcher';

interface ReadRadioById {
    params: {
        stationIds: string;
    };
}

export const $readRadioTop100 = createFetcher<RadioListApiResponse>({
    link: 'top-100-radio',
    cache: 'force-cache',
});

export const $readRadioById = createFetcher<RadioApiResponse, ReadRadioById>({
    link: 'radio-by-id',
    cache: 'force-cache',
});
