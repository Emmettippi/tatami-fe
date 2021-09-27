import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../entities/user';
import { BaseComponent } from '../../base/base.component';
import { MainService, LanguageService } from '../../../services';

@Component({
    selector: 'tatami-lightsout-menu',
    templateUrl: './lightsout-menu.component.html',
    styleUrls: ['./lightsout-menu.component.css']
})
export class LightsoutMenuComponent extends BaseComponent implements OnInit {

    get online() {
        return this.mainService.online;
    }

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

    training() {

    }

    infinite() {
    }

    thirtySeconds() {

    }

    rules() {
        this.navigateTo({ 'left': 'lightsout-rules' }, true);
    }

    back() {
        this.navigateTo({ 'left': 'other-games' }, true);
    }
}
