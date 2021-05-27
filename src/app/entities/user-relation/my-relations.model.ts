import { User } from '../user';

export class MyRelations {

    private static generateMyRelationsKeys = (): Array<keyof MyRelations> => {
        const keys = new Array<keyof MyRelations>();
        const my = new MyRelations();
        for (const key in my) {
            if (key) {
                keys.push(<keyof MyRelations>key);
            }
        }
        return keys;
    }
    // tslint:disable-next-line: member-ordering
    public static readonly keys = MyRelations.generateMyRelationsKeys();

    // tslint:disable-next-line: member-ordering
    public friends: Array<User>;
    // tslint:disable-next-line: member-ordering
    public askingFriends: Array<User>;
    // tslint:disable-next-line: member-ordering
    public pendingFriends: Array<User>;
    // tslint:disable-next-line: member-ordering
    public blocked: Array<User>;

    constructor(
        friends?: Array<User>
        , askingFriends?: Array<User>
        , pendingFriends?: Array<User>
        , blocked?: Array<User>
    ) {
        this.friends = friends || [];
        this.askingFriends = askingFriends || [];
        this.pendingFriends = pendingFriends || [];
        this.blocked = blocked || [];
    }
}
