import { Injectable } from '@angular/core';
import { User } from '../entities/user/user.model';
import { MyRelations } from '../entities/user-relation/my-relations.model';

@Injectable({ providedIn: 'root' })
export class MainService {

    public online: boolean;
    public logged: User;
    private _myRelations: MyRelations;
    public ipAddress: string;
    public readonly IP_REGEX = new RegExp('^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$');
    public language: string;
    public loading = 0;
    public isRightPanelOpened = false;

    get MAIN_URL(): string {
        return 'http://' + this.ipAddress + ':8080/api/';
    }

    public get myRelations() {
        return this._myRelations;
    }

    public set myRelations(value: MyRelations) {
        if (this._myRelations && value) {
            for (const key of MyRelations.keys) {
                if (this._myRelations[key] && value[key]) {
                    const newFriends = value[key].filter(
                        rel => !this._myRelations[key].map(_rel => _rel.id).includes(rel.id));
                    if (newFriends && newFriends.length) {
                        this._myRelations[key].push(...newFriends);
                    }
                    for (let i = 0; i < this._myRelations[key].length; i++) {
                        const oldAskingFriend = value[key].find(
                            rel => rel.id === this._myRelations[key][i].id);
                        if (!oldAskingFriend) {
                            this._myRelations[key].splice(i, 1);
                            i--;
                        }
                    }
                } else {
                    this._myRelations[key] = value[key];
                }
            }
        } else {
            this._myRelations = value;
        }
    }

    constructor(
    ) { }
}
