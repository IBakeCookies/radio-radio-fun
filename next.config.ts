import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'station-images-prod.radio-assets.com',
                port: '',
                pathname: '/44/**',
                // following the docs I copy pasta what they had, and it didnt work... I had to keep googleing and then Idecided to remove the search key and it worked...
                // search: '',
            },
        ],
    },
};

export default nextConfig;
