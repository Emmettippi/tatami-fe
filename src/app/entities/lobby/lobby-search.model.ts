export class LobbySearchDto {
    userId: number;
    page: number;
    size: number;
    lobbyType: 'ALL' | 'PUBLIC' | 'PRIVATE';
    name: string;

    constructor(
        userId?: number,
        lobbyType?: 'ALL' | 'PUBLIC' | 'PRIVATE',
        name?: string,
        page?: number,
        size?: number
    ) {
        this.userId = userId || 1;
        this.lobbyType = lobbyType;
        this.name = name;
        this.page = page || 0;
        this.size = size || 20;
    }
}
