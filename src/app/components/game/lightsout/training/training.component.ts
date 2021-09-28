import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

import { BaseComponent } from './../../../base/base.component';
import { LanguageService } from './../../../../services/language.service';
import { UserService } from './../../../../entities/user/user.service';
import { MainService } from './../../../../services/main.service';
import { LightsoutGameTable } from 'src/app/core/lightsout.constants';

@Component({
    selector: 'tatami-lightsout-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class LightsoutTrainingComponent extends BaseComponent implements OnInit {

    table: LightsoutGameTable;

    size = 4;
    trials = 1;
    type: 'default' | 'casual' | 'competitive' = 'casual';
    game: 'training' | 'infinite' | '30s' = 'training';

    // startTime: number;

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
        this.newPuzzle(true);
    }

    newPuzzle(useDefault = false) {
        this.table = new LightsoutGameTable(this.size, this.trials, useDefault ? 'default' : this.type);
        // this.startTime = (new Date()).getTime();
    }

    afterWin() {
        this.newPuzzle();
    }

    afterLoss() {
        this.newPuzzle();
    }
}
