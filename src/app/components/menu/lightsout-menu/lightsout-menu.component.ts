import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../entities/user';
import { BaseComponent } from '../../base/base.component';
import { MainService, LanguageService, GameService } from '../../../services';

@Component({
    selector: 'tatami-lightsout-menu',
    templateUrl: './lightsout-menu.component.html',
    styleUrls: ['./lightsout-menu.component.css']
})
export class LightsoutMenuComponent extends BaseComponent implements OnInit {

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService,
        private gameService: GameService
    ) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit(): void {
    }

    training() {

    }

    infinite() {
        this.gameService.gameRoot = 'infinite';
        this.navigateTo('game');
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
