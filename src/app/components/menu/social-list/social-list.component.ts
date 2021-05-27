import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './../../base/base.component';
import { MyRelations } from './../../../entities/user-relation/my-relations.model';
import { LanguageService, MainService } from '../../../services';
import { UserService } from '../../../entities/user';

@Component({
    selector: 'tatami-social-list',
    templateUrl: './social-list.component.html',
    styleUrls: ['./social-list.component.css']
})
export class SocialSubComponent extends BaseComponent implements OnInit {

    @Input() key: keyof MyRelations;
    @Input() color: 'success' | 'primary' | 'warning' | 'danger' = 'primary';

    get relationObj() {
        return this.mainService.relationObj;
    }

    get myRelations() {
        return this.mainService.myRelations;
    }

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

    onBtnOpenClick() {
        this.relationObj[this.key].open = !this.relationObj[this.key].open;
    }

    getExpandCollapseTitle(isOpened: boolean): string {
        return isOpened ? this.t('collapse') : this.t('expand');
    }
}
