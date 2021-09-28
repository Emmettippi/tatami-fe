import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "../../base/base.component";
import { MainService, LanguageService } from './../../../services';
import { User, UserService } from './../../../entities/user';

@Component({
    selector: 'tatami-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends BaseComponent implements OnInit {

    _expanded: boolean;
    get expanded(): boolean {
        return this._expanded;
    }
    set expanded(value: boolean) {
        this._expanded = value;
        if (value) {
            this.resetErrorMessage();
            this.user = new User();
            this.user.id = this.loggedUser.id;
            this.user.email = this.loggedUser.email;
            this.user.nickname = this.loggedUser.nickname;
            this.user.username = this.loggedUser.username;
            this.user.userStatus = this.loggedUser.userStatus;
            this.user.profileImage = this.loggedUser.profileImage;
        }
    }
    errorMessages: string[];

    get updateErrorMessages(): string[] {
        const ret = new Array<string>();
        this.userService.isValidEditUser(this.user).forEach((v) => {
            ret.push(v);
        });
        return ret;
    }

    user: User;

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService
    ) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit() {
        this.expanded = false;
    }

    getExpandCollapseTitle(): string {
        return this.expanded ? this.t('collapse') : this.t('expand');
    }

    onBtnOpenClick() {
        this.expanded = !this.expanded;
    }

    resetErrorMessage() {
        this.errorMessages = [];
    }
}
