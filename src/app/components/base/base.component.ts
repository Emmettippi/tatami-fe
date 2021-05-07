import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../../entities/user';
import { LanguageService, MainService } from './../../services';

@Component({
    selector: 'tatami-base',
    template: ''
})
export class BaseComponent {

    jitter = 0;

    get online(): boolean {
        return this.mainService.online;
    }
    get offline(): boolean {
        return !this.mainService.online;
    }
    get loggedUser(): User {
        return this.mainService.logged;
    }
    get TRANSL(): Map<string, object> {
        return this.languageService.TRANSL;
    }
    get lang(): string {
        return this.mainService.language;
    }
    set lang(value: string) {
        this.mainService.language = value;
    }

    get isRightOpen(): boolean {
        return this.mainService.isRightPanelOpened;
    }
    set isRightOpen(value: boolean) {
        this.mainService.isRightPanelOpened = value;
    }

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService
    ) {
    }

    t(str: string, ...params: string[]): string {
        let transl: string = this.languageService.TRANSL && this.languageService.TRANSL.get(str)
            ? this.languageService.TRANSL.get(str)[this.lang] : '???';
        if (params && params.length) {
            for (let i = 0; i < params.length; i++) {
                transl = transl.replace('{' + i + '}', params[i]);
            }
        }
        return transl;
    }

    navigateTo(commands: string | { [outlet: string]: string }) {
        if (typeof commands === 'string') {
            this.router.navigate([commands]);
        } else {
            this.router.navigate(
                [
                    {
                        outlets: commands
                    }
                ]
                , {
                    relativeTo: this.route
                    , skipLocationChange: true
                });
        }
    }
}
