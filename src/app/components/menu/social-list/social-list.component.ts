import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseComponent } from './../../base/base.component';
import { MyRelations } from './../../../entities/user-relation/my-relations.model';
import { LanguageService, MainService } from '../../../services';
import { UserService } from '../../../entities/user';
import { UserRelationService } from '../../../entities/user-relation';

@Component({
    selector: 'tatami-social-list',
    templateUrl: './social-list.component.html',
    styleUrls: ['./social-list.component.css']
})
export class SocialSubComponent extends BaseComponent implements OnInit {

    @Input() key: keyof MyRelations;
    @Input() color: 'success' | 'primary' | 'warning' | 'danger' = 'primary';

    get relationObj() {
        return this.mainService.relationObj;
    }

    get myRelations() {
        return this.mainService.myRelations;
    }

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService,
        private relationService: UserRelationService) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit(): void {
    }

    getExpandCollapseTitle(isOpened: boolean): string {
        return isOpened ? this.t('collapse') : this.t('expand');
    }

    getSpanNickClass(): string {
        switch (this.key) {
            case 'friends':
                return 'span-nick-2';
            case 'pendingFriends':
                return 'span-nick-3';
            default:
                return 'span-nick-1';
        }
    }

    getOnlineTitle(index: number) {
        let ret = 'offline';
        switch (this.myRelations[this.key][index].userStatus) {
            case 'ONLINE': ret = 'online'; break;
            case 'INGAME': ret = 'ingame'; break;
            case 'INLOBBY': ret = 'inlobby'; break;
            case 'NOT_RESPONDING': ret = 'notresponding'; break;
            case 'OFFLINE': ret = 'offline'; break;
        }
        return 'user.status.' + ret;
    }

    getOnlineColor(index: number) {
        let ret = 'black-status';
        switch (this.myRelations[this.key][index].userStatus) {
            case 'ONLINE': ret = 'green-status'; break;
            case 'INGAME': ret = 'red-status'; break;
            case 'INLOBBY': ret = 'magenta-status'; break;
            case 'NOT_RESPONDING': ret = 'yellow-status'; break;
            case 'OFFLINE': ret = 'black-status'; break;
        }
        return ret;
    }

    onBtnOpenClick() {
        this.relationObj[this.key].open = !this.relationObj[this.key].open;
    }

    handleRelation(entityId: number, relation: string) {
        let obs: Observable<HttpResponse<MyRelations>> = null;
        switch (relation) {
            case 'remove-friendship':
                obs = this.relationService.removeFriendship(entityId);
                break;
            case 'accept-friendship':
                obs = this.relationService.acceptFriendship(entityId);
                break;
            case 'cancel-request':
                obs = this.relationService.cancelFriendship(entityId);
                break;
            case 'refuse-friendship':
                obs = this.relationService.refuseFriendship(entityId);
                break;
            case 'block-user':
                obs = this.relationService.blockUser(entityId);
                break;
            case 'unlock-user':
                obs = this.relationService.unlockUser(entityId);
                break;
        }
        if (obs) {
            obs.subscribe(res => {
                console.log(res);
            }, error => {
                console.log(error);
            });
        }
    }
}
