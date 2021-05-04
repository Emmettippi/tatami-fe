export class UserSearchModel {
    public userId: number;
    public nickname: string;
    public username: string;
    public page: number;
    public size: number;

    constructor(
        userId?: number,
        nickname?: string,
        username?: string,
        page?: number,
        size?: number
    ) {
        this.userId = userId || 1;
        this.nickname = nickname;
        this.username = username;
        this.page = page || 0;
        this.size = size || 20;
    }

    getQueryParams(): string {
        let str = '';
        for (const key in this) {
            if (key) {
                const property = this[key];
                if (property || (typeof property === 'number' && property === 0)) {
                    if (!str) {
                        str += '?';
                    } else {
                        str += '&';
                    }
                    str += key + '=' + property;
                }
            }
        }
        return str;
    }
}
