import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user.model';
import { MainService } from '../../services/main.service';
import { Subscription, timer } from 'rxjs';
import { startWith, switchMap, takeWhile } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

    get userUrl(): string {
        return this.mainService.MAIN_URL + 'user/';
    }
    get ipRegex(): RegExp {
        return this.mainService.IP_REGEX;
    }
    get ipAddress(): string {
        return this.mainService.ipAddress;
    }
    set ipAddress(value: string) {
        this.mainService.ipAddress = value;
    }

    updateLoggedUserTimer: Subscription;

    constructor(
        private http: HttpClient,
        private mainService: MainService
    ) { }

    isValidLogin(user: User): Map<string, string> {
        const errorMap = new Map<string, string>();
        if (!this.ipAddress || !this.ipRegex.test(this.ipAddress)) {
            errorMap.set('ipAddress', 'ipAddress.error');
        }
        if (!user.username) {
            errorMap.set('username', 'username.error');
        }
        if (!user.password) {
            errorMap.set('password', 'password.error');
        }
        return errorMap;
    }

    isValidCreateUser(user: User, ipAddress: string = null): Map<string, string> {
        const errorMap = new Map<string, string>();
        if (!this.ipAddress || !this.ipRegex.test(this.ipAddress)) {
            errorMap.set('ipAddress', 'ipAddress.error');
        }
        if (!user.username) {
            errorMap.set('username', 'username.error');
        }
        if (!user.password) {
            errorMap.set('password', 'password.error');
        }
        if (user.newPassword !== user.password) {
            errorMap.set('newPassword', 'confirmPassword.error');
        }
        if (!user.email) {
            errorMap.set('email', 'email.error');
        }
        if (!user.nickname) {
            errorMap.set('nickname', 'nickname.error');
        }
        return errorMap;
    }

    isValidEditUser(user: User): Map<string, string> {
        const errorMap = new Map<string, string>();
        if (!user.email) {
            errorMap.set('email', 'email.error');
        }
        if (!user.nickname) {
            errorMap.set('nickname', 'nickname.error');
        }
        if (!user.password) {
            errorMap.set('password', 'password.error');
        }
        if (!user.newPassword) {
            errorMap.set('newPassword', 'newPassword.error');
        }
        if (!user.username) {
            errorMap.set('username', 'username.error');
        }
        return errorMap;
    }

    login(username: string, password: string) {
        const loginDto = { username, password };
        return this.http.post<User>(this.userUrl + 'login', loginDto, { observe: 'response' });
    }

    createUser(user: User) {
        return this.http.post<User>(this.userUrl + 'create', user, { observe: 'response' });
    }

    updateUser(user: User) {
        return this.http.put<User>(this.userUrl + 'update', user, { observe: 'response' });
    }

    startStopUserUpdate(start = true) {
        if (start && !this.updateLoggedUserTimer) {
            this.updateLoggedUserTimer = timer(0, 20000)
                .pipe(
                    startWith(0),
                    takeWhile(() => this.mainService.online),
                    switchMap(() => this.updateLastOnline(this.mainService.logged))
                ).subscribe((response) => {
                    console.log(response.body.lastOnline);
                }, (error) => {
                    console.log(error);
                    // Should go to login
                });
        } else if (!start && !!this.updateLoggedUserTimer) {
            this.updateLoggedUserTimer.unsubscribe();
            this.updateLoggedUserTimer = null;
        }
    }

    updateLastOnline(user: User) {
        return this.http.post<User>(this.userUrl + 'update-last-online', user, { observe: 'response' });
    }
}
