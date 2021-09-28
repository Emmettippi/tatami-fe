import { UserSearchModel } from './user-search.model';
import { MyRelations } from './../user-relation/my-relations.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserSearchDto } from './user.model';
import { MainService } from '../../services/main.service';
import { forkJoin, Subscription, timer } from 'rxjs';
import { startWith, switchMap, takeWhile, map } from 'rxjs/operators';
import { TATAMI_LOCAL_TOKEN, getQueryParams } from './../../core/constants';

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
        if (!user.username) {
            errorMap.set('username', 'username.error');
        }
        if (!user.nickname) {
            errorMap.set('nickname', 'nickname.error');
        }
        if (!user.password) {
            if (!user.newPassword) {
                errorMap.set('newPassword', 'newPassword.error');
            }
        }
        return errorMap;
    }

    login(username: string, password: string) {
        const loginDto = { username, password };
        return this.http.post<User>(this.userUrl + 'login', loginDto, { observe: 'response' })
            .pipe(
                map((httpResponse) => {
                    if (httpResponse && httpResponse.body && httpResponse.body.token) {
                        localStorage.setItem(TATAMI_LOCAL_TOKEN, httpResponse.body.token);
                    } else {
                        localStorage.removeItem(TATAMI_LOCAL_TOKEN);
                    }
                    return httpResponse;
                })
            );
    }

    logout() {
        this.mainService.online = false;
        this.mainService.logged = null;
        localStorage.removeItem(TATAMI_LOCAL_TOKEN);
        this.startStopUserUpdate(false);
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
                    switchMap(() => forkJoin(
                        this.updateLastOnline()
                        , this.getMyRelations()
                    ))
                ).subscribe((response) => {
                    // this.mainService.myRelations = response[1].body;
                }, (error) => {
                    console.log(error);
                    // Should go to login
                });
        } else if (!start && !!this.updateLoggedUserTimer) {
            this.updateLoggedUserTimer.unsubscribe();
            this.updateLoggedUserTimer = null;
        }
    }

    updateLastOnline() {
        return this.http.post<User>(this.userUrl + 'update-last-online/' + this.mainService.logged.id, null, { observe: 'response' });
    }

    getMyRelations() {
        return this.http.get<MyRelations>(this.userUrl + 'my-relations/' + this.mainService.logged.id, { observe: 'response' })
            .pipe(
                map((response) => {
                    this.mainService.myRelations = response && response.body ? response.body : null;
                    return response;
                })
            );
    }

    searchUsers(params: UserSearchModel) {
        if (!params) {
            params = new UserSearchModel();
        }
        return this.http.get<Array<UserSearchDto>>(this.userUrl + 'search' + getQueryParams(params), { observe: 'response' });
    }
}
