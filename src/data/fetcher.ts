import type { LinkManagerKeys } from '@/data/linkManager';
import { linkManager } from '@/data/linkManager';

export type FetcherParams = Record<string, string | string[]>;

export type FetcherInput = {
    params?: FetcherParams;
};

export interface FetcherConfig extends FetcherInput {
    link: LinkManagerKeys;
    method?: RequestInit['method'];
    headers?: RequestInit['headers'];
    cache?: RequestInit['cache'];
    surfaceError?: boolean;
}

interface FetcherResponse<O> {
    data: O;
    status: number;
    statusText: string;
}

export function createFetcher<O>(
    config: FetcherConfig,
): () => Promise<FetcherResponse<O> | undefined>;

export function createFetcher<O, I extends FetcherInput>(
    config: FetcherConfig,
): (input: I) => Promise<FetcherResponse<O> | undefined>;

export function createFetcher<O, I extends FetcherInput>(config: FetcherConfig) {
    return async (input?: I): Promise<FetcherResponse<O> | undefined> => {
        const url = new URL(linkManager.getLink(config.link));

        const params = {
            ...config.params,
            ...input?.params,
        };

        Object.entries(params).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((v) => url.searchParams.append(key, v));
            } else {
                url.searchParams.set(key, value);
            }
        });

        const fetchConfig: RequestInit = {
            method: config.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...config.headers,
            },
            cache: config.cache || 'default',
        };

        try {
            const response = await fetch(url.toString(), fetchConfig);

            if (!response.ok) {
                if (config.surfaceError) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }

            const data: O = await response.json();

            return {
                data,
                status: response.status,
                statusText: response.statusText,
            };
        } catch (error: unknown) {
            console.error('Fetch error:', error);

            if (config.surfaceError) {
                throw error;
            }
        }
    };
}
