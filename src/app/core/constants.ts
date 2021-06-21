export enum KEY_CODE {
    ENTER = 13
}

export enum RELATION_SORT {
    DEFAULT = 'nickname'
    , USERNAME = 'username'
}

export const HTTP_CODE = {
    OK: 200
    , BAD_REQUEST: 400
    , UNAUTHORIZED: 401
    , NOT_FOUND: 404
    , INTERNAL_SERVER_ERROR: 500
    , BAD_GATEWAY: 502
};

export const TATAMI_HEADER_TOKEN = 'tatami-auth-token';
export const TATAMI_LOCAL_TOKEN = 'tatami-auth-token';

export const getQueryParams = (obj: any, forceNull: string[] = []): string => {
    if (!obj || typeof obj !== 'object') {
        return '';
    }
    if (!forceNull) {
        forceNull = [];
    }
    let str = '';
    for (const key in obj) {
        if (key) {
            const property = obj[key];
            if (typeof property === 'number'
                || typeof property === 'boolean'
                || typeof property === 'string') {
                if (property || property === 0 || forceNull.includes(key)) {
                    if (!str) {
                        str += '?';
                    } else {
                        str += '&';
                    }
                    str += key + '=' + property;
                }
            }
        }
    }
    return str;
};
