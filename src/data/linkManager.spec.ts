import { describe, it, expect } from 'vitest';
import { LINKS, linkManager } from '@/data/linkManager';

describe('linkManager', () => {
    it('should properly return links', () => {
        expect(linkManager.getLink('__test')).toEqual(LINKS.__test);
        expect(linkManager.getLink('radio-by-id')).toEqual(LINKS['radio-by-id']);
        expect(linkManager.getLink('top-100-radio')).toEqual(LINKS['top-100-radio']);
    });
});
