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
}
