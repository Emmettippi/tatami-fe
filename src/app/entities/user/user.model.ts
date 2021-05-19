export class User {
    id: number;
    username: string;
    password: string;
    newPassword: string;
    nickname: string;
    email: string;
    token: string;
    userStatus: string;
    lastOnline: any;
    profileImage: any;

    constructor(
        id?: number,
        username?: string,
        password?: string,
        newPassword?: string,
        nickname?: string,
        email?: string,
        token?: string,
        userStatus?: string,
        lastOnline?: any,
        profileImage?: any
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.newPassword = newPassword;
        this.nickname = nickname;
        this.email = email;
        this.token = token;
        this.userStatus = userStatus;
        this.lastOnline = lastOnline;
        this.profileImage = profileImage;
    }
}
