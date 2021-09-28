import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../entities/user';
import { BaseComponent } from '../../base/base.component';
import { MainService, LanguageService } from '../../../services';

@Component({
    selector: 'tatami-lightsout-rules',
    templateUrl: './lightsout-rules.component.html',
    styleUrls: ['./lightsout-rules.component.css']
})
export class LightsoutRulesComponent extends BaseComponent implements OnInit {

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

    back() {
        this.navigateTo({ 'left': 'lightsout-menu' }, true);
    }
}
