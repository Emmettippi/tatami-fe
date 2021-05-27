import { KEY_CODE } from './../../core/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../../entities/user';
import { LanguageService, MainService } from '../../services';
import { BaseComponent } from '../base/base.component';
import { MyRelations } from 'src/app/entities/user-relation';

@Component({
    selector: 'tatami-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

    get loading(): number {
        return this.mainService.loading;
    }
    get ipAddress(): string {
        return this.mainService.ipAddress;
    }
    set ipAddress(value: string) {
        this.mainService.ipAddress = value;
    }

    isRegistration: boolean;
    user: User;
    errorMessages: string[];

    get creationErrorMessages(): string[] {
        const ret = new Array<string>();
        this.userService.isValidCreateUser(this.user).forEach((v) => {
            ret.push(v);
        });
        return ret;
    }

    get loginErrorMessages(): string[] {
        const ret = new Array<string>();
        this.userService.isValidLogin(this.user).forEach((v) => {
            ret.push(v);
        });
        return ret;
    }

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
        this.isRegistration = false;
        this.user = new User();
    }

    @HostListener('window:keypress', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode === KEY_CODE.ENTER
            && !this.mainService.loading) {
            if (this.isRegistration) {
                this.onRegistration();
            } else {
                this.login();
            }
        }
    }

    login() {
        if (this.isLoginEnabled()) {
            this.jitter++;
            this.mainService.loading++;
            this.userService.login(this.user.username, this.user.password)
                .subscribe((response) => {
                    this.mainService.loading--;
                    this.mainService.online = true;
                    this.mainService.logged = response.body;
                    this.mainService.isRightPanelOpened = false;
                    this.userService.startStopUserUpdate(true);
                    this.navigateTo('main-menu');
                }, (error: HttpErrorResponse) => {
                    this.mainService.loading--;
                    this.mainService.online = false;
                    this.mainService.logged = null;
                    this.userService.startStopUserUpdate(false);
                    console.log(error);
                    this.errorMessages = new Array<string>();
                    if (error.status === 400) {
                        this.errorMessages.push('error.login');
                    } else {
                        this.errorMessages.push('error.' + error.status);
                    }
                });
        }
    }

    loginOffline() {
        this.mainService.online = false;
        this.mainService.logged = null;
        this.mainService.isRightPanelOpened = false;
        this.userService.startStopUserUpdate(false);
        this.mainService.myRelations = new MyRelations([
            new User(1, 'a', null, null, 'A', null, null, 'ONLINE')
            , new User(2, 'b', null, null, 'B', null, null, 'ONLINE')
            , new User(3, 'c', null, null, 'C', null, null, 'INLOBBY')
            , new User(4, 'd', null, null, 'D', null, null, 'INLOBBY')
            , new User(5, 'e', null, null, 'E', null, null, 'INGAME')
            , new User(6, 'f', null, null, 'F', null, null, 'INGAME')
            , new User(7, 'g', null, null, 'G', null, null, 'NOT_RESPONDING')
            , new User(8, 'h', null, null, 'H', null, null, 'NOT_RESPONDING')
            , new User(9, 'i', null, null, 'I', null, null, 'ONLINE')
            , new User(10, 'j', null, null, 'J', null, null, 'ONLINE')
            , new User(11, 'k', null, null, 'K', null, null, 'OFFLINE')
            , new User(11, 'l', null, null, 'L', null, null, 'OFFLINE')
        ], [
            new User(1, 'a', null, null, 'A', null, null, 'ONLINE')
            , new User(2, 'b', null, null, 'B', null, null, 'ONLINE')
            , new User(3, 'c', null, null, 'C', null, null, 'INLOBBY')
            , new User(4, 'd', null, null, 'D', null, null, 'INLOBBY')
            , new User(5, 'e', null, null, 'E', null, null, 'INGAME')
            , new User(6, 'f', null, null, 'F', null, null, 'INGAME')
            , new User(7, 'g', null, null, 'G', null, null, 'NOT_RESPONDING')
            , new User(8, 'h', null, null, 'H', null, null, 'NOT_RESPONDING')
            , new User(9, 'i', null, null, 'I', null, null, 'ONLINE')
            , new User(10, 'j', null, null, 'J', null, null, 'ONLINE')
            , new User(11, 'k', null, null, 'K', null, null, 'OFFLINE')
            , new User(11, 'l', null, null, 'L', null, null, 'OFFLINE')], [
            new User(1, 'a', null, null, 'A', null, null, 'ONLINE')
            , new User(2, 'b', null, null, 'B', null, null, 'ONLINE')
            , new User(3, 'c', null, null, 'C', null, null, 'INLOBBY')
            , new User(4, 'd', null, null, 'D', null, null, 'INLOBBY')
            , new User(5, 'e', null, null, 'E', null, null, 'INGAME')
            , new User(6, 'f', null, null, 'F', null, null, 'INGAME')
            , new User(7, 'g', null, null, 'G', null, null, 'NOT_RESPONDING')
            , new User(8, 'h', null, null, 'H', null, null, 'NOT_RESPONDING')
            , new User(9, 'i', null, null, 'I', null, null, 'ONLINE')
            , new User(10, 'j', null, null, 'J', null, null, 'ONLINE')
            , new User(11, 'k', null, null, 'K', null, null, 'OFFLINE')
            , new User(11, 'l', null, null, 'L', null, null, 'OFFLINE')], [
            new User(1, 'a', null, null, 'A', null, null, 'ONLINE')
            , new User(2, 'b', null, null, 'B', null, null, 'ONLINE')
            , new User(3, 'c', null, null, 'C', null, null, 'INLOBBY')
            , new User(4, 'd', null, null, 'D', null, null, 'INLOBBY')
            , new User(5, 'e', null, null, 'E', null, null, 'INGAME')
            , new User(6, 'f', null, null, 'F', null, null, 'INGAME')
            , new User(7, 'g', null, null, 'G', null, null, 'NOT_RESPONDING')
            , new User(8, 'h', null, null, 'H', null, null, 'NOT_RESPONDING')
            , new User(9, 'i', null, null, 'I', null, null, 'ONLINE')
            , new User(10, 'j', null, null, 'J', null, null, 'ONLINE')
            , new User(11, 'k', null, null, 'K', null, null, 'OFFLINE')
            , new User(11, 'l', null, null, 'L', null, null, 'OFFLINE')]);
        this.navigateTo('main-menu');
    }

    registration(isRegistration: boolean) {
        this.user = new User();
        this.resetErrorMessage();
        this.isRegistration = isRegistration;
    }

    onRegistration() {
        if (this.isRegistrationEnabled()) {
            this.jitter++;
            this.mainService.loading++;
            this.userService.createUser(this.user)
                .subscribe((response) => {
                    this.mainService.loading--;
                    this.errorMessages = ['creation.success'];
                }, (error: HttpErrorResponse) => {
                    this.mainService.loading--;
                    console.log(error);
                    this.errorMessages = new Array<string>();
                    if (error.status === 400) {
                        this.errorMessages.push('creation.error');
                    } else {
                        this.errorMessages.push('error.' + error.status);
                    }
                });
        }
    }

    resetErrorMessage() {
        this.errorMessages = [];
    }

    isLoginEnabled(): boolean {
        return !this.loginErrorMessages.length;
    }

    isRegistrationEnabled(): boolean {
        return !this.creationErrorMessages.length;
    }
}
