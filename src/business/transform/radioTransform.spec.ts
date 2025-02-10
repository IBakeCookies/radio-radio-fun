import { describe, it, expect } from 'vitest';
import { radioApi } from '@/data/type/radio/radioApi';
import { transformRadioApiToRadioApp } from '@/business/transform/radioTransform';
import { radioApp } from '@/business/type/radio/radioApp';

describe('transformRadioApiToRadioApp', () => {
    it('should return the correct transformed object', () => {
        const result = transformRadioApiToRadioApp(radioApi);

        expect(result).toEqual(radioApp);
    });
});

// same for the other function that does the other transform
