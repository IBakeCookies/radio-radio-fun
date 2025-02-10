export type LinkManagerKeys = keyof typeof LINKS;

export const LINKS = {
    __test: 'https://test.com',
    'radio-station': 'https://prod.radio-api.net/stations/list-by-system-name',
    'top-100-radio':
        'https://prod.radio-api.net/stations/list-by-system-name?systemName=STATIONS_TOP&count=100',
    'radio-by-id': 'https://prod.radio-api.net/stations/details',
};

class LinkManager {
    private links = LINKS;

    getLink(name: LinkManagerKeys): string {
        return this.links[name];
    }
}

export const linkManager = new LinkManager();
