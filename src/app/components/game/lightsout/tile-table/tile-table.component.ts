import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

import { BaseComponent } from './../../../base/base.component';
import { LanguageService } from './../../../../services/language.service';
import { UserService } from './../../../../entities/user/user.service';
import { MainService } from './../../../../services/main.service';
import { LightsoutGameTable } from './../../../../core/lightsout.constants';

@Component({
    selector: 'tatami-lightsout-tile-table',
    templateUrl: './tile-table.component.html',
    styleUrls: ['./tile-table.component.css']
})
export class LightsoutTileTableComponent extends BaseComponent implements OnInit {

    preventClick = false;

    strTimer: string;
    currentTable: LightsoutGameTable;

    // @Input()
    startTime: number;
    @Input() set table(value: LightsoutGameTable) {
        this.currentTable = value;
        // this.preventClick = this.currentTable.isWin();
    }
    get table() {
        return this.currentTable;
    }
    @Input() type: 'training' | 'infinite' | '30s' = 'training';

    @Output() afterWin = new EventEmitter<any>();
    @Output() afterLoss = new EventEmitter<any>();
    @Output() newPuzzle = new EventEmitter<any>();

    timerSub: Subscription;
    timer30s: Subscription;

    startupTimer: Subscription;

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
        const backup = this.currentTable;
        let readyup = 6;
        this.preventClick = true;
        this.startupTimer = timer(0, 1000).subscribe(() => {
            readyup--;
            this.strTimer = readyup.toString();
            if (readyup <= 0) {
                this.newPuzzle.emit('startup');
                this.preventClick = false;
                this.startTime = (new Date()).getTime();
                this.startTimer();
                if (this.type === '30s') {
                    this.start30sTimer();
                }
            }
        });

        timer(5100).subscribe(() => {
            this.startupTimer.unsubscribe();
        });
    }

    startTimer() {
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
        this.timerSub = timer(0, 15).subscribe(() => {
            this.formatStr();
        });
    }

    stopTimer() {
        if (this.timerSub) {
            this.timerSub.unsubscribe();
        }
        this.formatStr();
    }

    start30sTimer() {
        if (this.timer30s) {
            this.timer30s.unsubscribe();
        }
        if (this.type = '30s') {
            this.timer30s = timer(30000).subscribe(() => {
                this.stopTimer();
                this.stop30sTimer(false);
                this.preventClick = true;
            });
        }
    }

    stop30sTimer(unsubscr = true) {
        if (unsubscr && this.timer30s) {
            this.timer30s.unsubscribe();
        }
        this.formatStr();
    }

    formatStr() {
        switch (this.type) {
            case 'training':
                this.formatForTraining();
                break;
            case 'infinite':
                this.formatForInfinite();
                break;
            case '30s':
                this.formatFor30s();
                break;
        }
    }

    formatForTraining() {
        const d = new Date((new Date()).getTime() - this.startTime);
        const iso = d.toISOString();
        this.strTimer = iso.substr(14, 9).replace('.', ':');
    }

    formatForInfinite() {
        const d = new Date((new Date()).getTime() - this.startTime);
        const iso = d.toISOString();
        this.strTimer = iso.substr(14, 9).replace('.', ':');
    }

    formatFor30s() {
        const _d = (new Date()).getTime();
        const d = new Date(Math.max(this.startTime + 30000 - _d, 0));
        const iso = d.toISOString();
        this.strTimer = iso.substr(14, 9).replace('.', ':');
    }

    click(i: number, j: number) {
        this.table.clickTile(i, j);
        if (this.table.isWin()) {
            this.preventClick = true;
            if (this.type !== '30s') {
                this.stopTimer();
            }
            const wait = this.type === 'training' ? 1000 : this.type === 'infinite' ? 500 : 100;
            timer(wait).subscribe(() => {
                this.afterWin.emit('puzzle-complete');
                this.preventClick = false;
                if (this.type !== '30s') {
                    this.startTime = (new Date()).getTime();
                    this.startTimer();
                }
            });
        } else if (this.table.clicks === this.table.trials) {
            this.preventClick = true;
            if (this.type !== '30s') {
                this.stopTimer();
            }
            const wait = this.type === 'training' ? 1000 : this.type === 'infinite' ? 500 : 100;
            timer(wait).subscribe(() => {
                this.afterLoss.emit('puzzle-loss');
                this.preventClick = false;
                if (this.type !== '30s') {
                    this.startTime = (new Date()).getTime();
                    this.startTimer();
                }
            });
        }
    }
}
