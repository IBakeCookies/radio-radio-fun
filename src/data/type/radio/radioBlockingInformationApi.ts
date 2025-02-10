export interface RadioBlockingInformationApi {
    isBlocked: boolean;
    isBlockedIn: string[];
}

export const radioBlockingInformationApi: RadioBlockingInformationApi = {
    isBlocked: false,
    isBlockedIn: []
}