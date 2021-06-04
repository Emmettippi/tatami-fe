import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseComponent } from './../../base/base.component';
import { MainService, LanguageService } from './../../../services';
import { UserSearchDto, UserService, UserSearchModel } from '../../../entities/user';
import { MyRelations, UserRelationService } from './../../../entities/user-relation';

@Component({
    selector: 'tatami-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent extends BaseComponent implements OnInit {

    readonly MY_REL_KEYS = MyRelations.keys;

    filter = new UserSearchModel();
    jitter: number;
    users: UserSearchDto[] = [];

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
        this.jitter = 0;
        this.cleanFilters();
    }

    cleanFilters() {
        this.filter.nickname = null;
        this.filter.username = null;
        this.filter.page = 0;
        if (this.online) {
            this.filter.userId = this.loggedUser.id;
        }
        this.onSearch();
    }

    onFilterChange(event: string, filter: keyof UserSearchModel) {
        if (filter === 'nickname' || filter === 'username') {
            this.filter[filter] = event;
        }
        this.filter.page = 0;
        this.onSearch();
    }

    onPageChange(newPage: number) {
        this.filter.page = newPage;
        this.onSearch();
    }

    onSearch() {
        if (this.filter.nickname || this.filter.username) {
            this.jitter++;
            const jitter = this.jitter;
            this.userService.searchUsers(this.filter)
                .subscribe((response) => {
                    if (jitter === this.jitter) {
                        this.users = response.body;
                    }
                }, (error) => {
                    console.log(error);
                });
        } else {
            this.users = [];
        }
    }

    getSpanNickClass(index: number): string {
        switch (this.getKey(index)) {
            case 'nothing':
                return 'span-nick-2';
            case 'pendingFriends':
                return 'span-nick-3';
            default:
                return 'span-nick-1';
        }
    }

    getOnlineTitle(index: number) {
        let ret = 'offline';
        switch (this.users[index].userStatus) {
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
        switch (this.users[index].userStatus) {
            case 'ONLINE': ret = 'green-status'; break;
            case 'INGAME': ret = 'red-status'; break;
            case 'INLOBBY': ret = 'magenta-status'; break;
            case 'NOT_RESPONDING': ret = 'yellow-status'; break;
            case 'OFFLINE': ret = 'black-status'; break;
        }
        return ret;
    }

    getKey(index: number): string {
        for (const key of MyRelations.keys) {
            if (key) {
                const u = this.mainService.myRelations[key].find(r => r.id === this.users[index].id);
                if (u) {
                    return <string>key;
                }
            }
        }
        return 'nothing';
    }

    handleRelation(entityId: number, relation: string) {
        let obs: Observable<HttpResponse<MyRelations>> = null;
        switch (relation) {
            case 'ask-friendship':
                obs = this.relationService.askFriendship(entityId);
                break;
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
