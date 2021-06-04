import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../../base/base.component';
import { MainService, LanguageService } from './../../../services';
import { UserSearchDto, UserService, UserSearchModel } from '../../../entities/user';
import { MyRelations } from './../../../entities/user-relation';

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
        protected languageService: LanguageService) {
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
}
