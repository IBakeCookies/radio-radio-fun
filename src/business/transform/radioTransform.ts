import type { RadioApi } from '@/data/type/radio/radioApi';
import type { RadioListApi } from '@/data/type/radio/radioListApi';
import type { RadioApp } from '@/business/type/radio/radioApp';
import type { RadioListApp } from '@/business/type/radio/radioListApp';

export function transformRadioListApiToRadioListApp(radio: RadioListApi): RadioListApp {
    return {
        id: radio.id,
        name: radio.name,
        logo: radio.logo44x44,
        genre: radio.genres || [],
    };
}

export function transformRadioApiToRadioApp(radio: RadioApi): RadioApp {
    return {
        id: radio.id,
        name: radio.name,
        logo: radio.logo44x44,
        genre: radio.genres || [],
        description: radio.description,
        streamingUrls: radio.streams.map((stream) => stream.url),
    };
}
