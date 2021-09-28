import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from './../../../base/base.component';
import { LanguageService } from './../../../../services/language.service';
import { UserService } from './../../../../entities/user/user.service';
import { MainService } from './../../../../services/main.service';

@Component({
    selector: 'tatami-lightsout-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.css']
})
export class LightsoutTileComponent extends BaseComponent implements OnInit {

    @Input() id: string;
    @Input() clickable = true;

    private _value = false;
    @Input() set value(val: boolean) {
        this._value = val;
    }
    get value() {
        return this._value;
    }

    @Output() subClick = new EventEmitter<any>();

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

    click() {
        if (this.clickable) {
            this.subClick.emit();
        }
    }
}
