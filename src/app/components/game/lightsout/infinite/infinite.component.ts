import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../../../base/base.component';
import { LanguageService } from './../../../../services/language.service';
import { UserService } from './../../../../entities/user/user.service';
import { MainService } from './../../../../services/main.service';
import { LightsoutGameTable } from 'src/app/core/lightsout.constants';

@Component({
    selector: 'tatami-lightsout-infinite',
    templateUrl: './infinite.component.html',
    styleUrls: ['./infinite.component.css']
})
export class LightsoutInfiniteComponent extends BaseComponent implements OnInit {

    table: LightsoutGameTable;

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
        this.table = new LightsoutGameTable(4, 1);
    }
}
