import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../base/base.component';
import { LanguageService } from './../../services/language.service';
import { UserService } from './../../entities/user/user.service';
import { MainService } from './../../services/main.service';

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
        protected languageService: LanguageService
    ) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit(): void {
    }
}
