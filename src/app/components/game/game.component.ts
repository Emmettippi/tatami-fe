import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../base/base.component';
import { UserService } from './../../entities/user/user.service';
import { MainService, LanguageService, GameService } from './../../services';

@Component({
    selector: 'tatami-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent extends BaseComponent implements OnInit {

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
        this.navigateTo({ 'game': this.gameService.gameRoot });
    }
}
