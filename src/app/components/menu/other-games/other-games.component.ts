import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../entities/user';
import { BaseComponent } from '../../base/base.component';
import { MainService, LanguageService } from '../../../services';

@Component({
    selector: 'tatami-other-games',
    templateUrl: './other-games.component.html',
    styleUrls: ['./other-games.component.css']
})
export class OtherGamesComponent extends BaseComponent implements OnInit {

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService
    ) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit(): void {
    }

    lightsout() {
        this.navigateTo({ 'left': 'lightsout-menu' }, true);
    }

    back() {
        this.navigateTo({ 'left': 'menu' }, true);
    }
}
