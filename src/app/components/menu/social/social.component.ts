import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../../base/base.component';
import { MainService, LanguageService } from './../../../services';
import { UserService } from '../../../entities/user';
import { MyRelations } from './../../../entities/user-relation';

@Component({
    selector: 'tatami-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent extends BaseComponent implements OnInit {

    readonly MY_REL_KEYS = MyRelations.keys;

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit(): void {
    }
}
