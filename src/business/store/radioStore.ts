import type { RadioApp } from '@/business/type/radio/radioApp';
import type { RadioListApp } from '@/business/type/radio/radioListApp';
import { cache } from 'react';
import { $readRadioTop100, $readRadioById } from '@/data/repository/radio';
import {
    transformRadioApiToRadioApp,
    transformRadioListApiToRadioListApp,
} from '@/business/transform/radioTransform';

export const getRadioStation: (radioId: string) => Promise<RadioApp | undefined> = cache(
    async (radioId: string) => {
        const response = await $readRadioById({
            params: {
                stationIds: radioId,
            },
        });

        if (!response || !response.data.length) {
            return;
        }

        return transformRadioApiToRadioApp(response.data[0]);
    },
);

export async function getRadioStations(): Promise<RadioListApp[]> {
    const response = await $readRadioTop100();

    if (!response) {
        return [];
    }

    return response.data.playables.map(transformRadioListApiToRadioListApp);
}
