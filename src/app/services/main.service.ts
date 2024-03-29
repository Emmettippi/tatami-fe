import { Injectable } from '@angular/core';
import { User } from '../entities/user/user.model';
import { MyRelations } from '../entities/user-relation/my-relations.model';
import { RelationObj } from './../core/relation-obj.model';

@Injectable({ providedIn: 'root' })
export class MainService {

    public online: boolean;
    public logged: User;
    private _myRelations: MyRelations;
    public relationObj = new RelationObj(MyRelations.keys);
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
                        let oldAskingFriend: User = null;
                        let oldAskingIndex: number = null;
                        for (let j = 0; j < value[key].length; j++) {
                            if (value[key][j].id === this._myRelations[key][i].id) {
                                oldAskingFriend = value[key][j];
                                oldAskingIndex = j;
                            }
                        }
                        if (!oldAskingFriend) {
                            this._myRelations[key].splice(i, 1);
                            i--;
                        } else {
                            this._myRelations[key][i] = value[key][oldAskingIndex];
                        }
                    }
                } else {
                    this._myRelations[key] = value[key];
                }
            }
        } else {
            this._myRelations = value;
        }

        if (this._myRelations) {
            for (const key of MyRelations.keys) {
                this.sortMyRelations(key);
            }
        }
    }

    constructor(
    ) { }

    sortMyRelations(key: keyof MyRelations) {
        this._myRelations[key] = this._myRelations[key].sort((a, b) => {
            return a[this.relationObj[key].sort].toUpperCase().localeCompare(
                b[this.relationObj[key].sort].toUpperCase()
            ) * (this.relationObj[key].asc ? 1 : -1);
        });
    }
}
