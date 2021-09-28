import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    @Input() table: LightsoutGameTable;
    @Output() tableChange = new EventEmitter<LightsoutGameTable>();

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

    click(i: number, j: number) {
        this.table.clickTile(i, j);
        this.tableChange.emit(this.table);
    }
}
