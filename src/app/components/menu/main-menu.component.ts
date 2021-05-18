import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../base/base.component';
import { LanguageService } from './../../services/language.service';
import { UserService } from './../../entities/user/user.service';
import { MainService } from './../../services/main.service';

@Component({
    selector: 'tatami-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent extends BaseComponent implements OnInit {

    get loading(): number {
        return this.mainService.loading;
    }

    notOpenedRightPanelOnce = true;
    readonly openedStr = '>';
    readonly closedStr = '<';

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService
    ) {
        super(router, route, mainService, userService, languageService);
        this.isRightOpen = false;
    }

    ngOnInit(): void {
        this.navigateTo({
            left: 'menu'
            , right: 'social'
        });
    }

    openCloseRightPanel() {
        this.isRightOpen = !this.isRightOpen;
        this.notOpenedRightPanelOnce = false;
    }

    onPageChange() {

    }

    onFilterChange() {

    }

    searchUsers() {

    }

    askFriendship() {

    }

    acceptFriendship() {

    }

    refuseFriendship() {

    }

    removeFriendship() {

    }

    blockUser() {

    }

    unlockUser() { }

}
