import { RadioApi } from '@/data/type/radio/radioApi';

export interface RadioListApp {
    id: RadioApi['id'];
    name: string;
    logo: string;
    genre: string[];
}
