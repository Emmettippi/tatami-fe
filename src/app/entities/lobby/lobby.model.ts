export class Lobby {
    id: number;
    gameOrder: string;

    userId1: number;
    nickname1: string;
    lastInLobby1: number;
    color1: string;

    userId2: number;
    nickname2: string;
    lastInLobby2: number;
    color2: string;

    userId3: number;
    nickname3: string;
    lastInLobby3: number;
    color3: string;

    userId4: number;
    nickname4: string;
    lastInLobby4: number;
    color4: string;

    lobbyType: string;
    lobbyName: string;
    gameId: number;
    closed: boolean;

    friends: number;

    constructor(
        id?: number,
        gameOrder?: string,
        userId1?: number,
        nickname1?: string,
        lastInLobby1?: number,
        color1?: string,
        userId2?: number,
        nickname2?: string,
        lastInLobby2?: number,
        color2?: string,
        userId3?: number,
        nickname3?: string,
        lastInLobby3?: number,
        color3?: string,
        userId4?: number,
        nickname4?: string,
        lastInLobby4?: number,
        color4?: string,
        lobbyType?: string,
        lobbyName?: string,
        gameId?: number,
        closed?: boolean,
        friends?: number
    ) {
        this.id = id || null;
        this.gameOrder = gameOrder || '1234';
        this.userId1 = userId1 || null;
        this.nickname1 = nickname1 || null;
        this.lastInLobby1 = lastInLobby1 || null;
        this.color1 = color1 || null;
        this.userId2 = userId2 || null;
        this.nickname2 = nickname2 || null;
        this.lastInLobby2 = lastInLobby2 || null;
        this.color2 = color2 || null;
        this.userId3 = userId3 || null;
        this.nickname3 = nickname3 || null;
        this.lastInLobby3 = lastInLobby3 || null;
        this.color3 = color3 || null;
        this.userId4 = userId4 || null;
        this.nickname4 = nickname4 || null;
        this.lastInLobby4 = lastInLobby4 || null;
        this.color4 = color4 || null;
        this.lobbyType = lobbyType || 'PRIVATE';
        this.lobbyName = lobbyName || null;
        this.gameId = gameId || null;
        this.closed = closed || false;
        this.friends = friends || 0;
    }

    isFull() {
        return this.userId1 != null && this.userId2 != null && this.userId3 != null && this.userId4 != null;
    }

    isEmpty() {
        return this.userId1 == null && this.userId2 == null && this.userId3 == null && this.userId4 == null;
    }

    isUserAlreadyInside(userId: number) {
        if (!userId) {
            return true;
        }
        return userId !== this.userId1 && userId !== this.userId2 && userId !== this.userId3 && userId !== this.userId4;
    }

    isClosed() {
        return this.closed;
    }

    getColorsInUse() {
        return [this.color1, this.color2, this.color3, this.color4];
    }
}
