import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../../entities/user';
import { LanguageService, MainService } from '../../services';
import { BaseComponent } from '../base/base.component';

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

    login() {
        if (this.isLoginEnabled()) {
            this.jitter++;
            this.mainService.loading++;
            this.userService.login(this.user.username, this.user.password)
                .subscribe((response) => {
                    this.mainService.loading--;

                }, (error: HttpErrorResponse) => {
                    this.mainService.loading--;
                    console.log(error);
                    if (error.status >= 400 && error.status < 500) {
                        this.errorMessages = ['error.400'];
                    } else if (error.status >= 500) {
                        this.errorMessages = ['error.500'];
                    }
                });
        }
    }

    loginOffline() {
        this.errorMessages = ['Offline mode.'];
    }

    registration(isRegistration: boolean) {
        this.user = new User();
        this.resetErrorMessage();
        this.isRegistration = isRegistration;
    }

    onRegistration() {
        this.errorMessages = ['RegistrationTime.'];
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
