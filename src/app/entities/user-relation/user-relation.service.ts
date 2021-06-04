import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MainService } from 'src/app/services';
import { UserService } from '../user';

@Injectable({ providedIn: 'root' })
export class UserRelationService {

    get userUrl(): string {
        return this.mainService.MAIN_URL + 'relation/';
    }

    constructor(
        private http: HttpClient,
        private mainService: MainService,
        private userService: UserService
    ) {
    }

    private pipe(obs: Observable<any>) {
        return obs.pipe(
            switchMap(res => this.userService.getMyRelations())
            , catchError(err => this.userService.getMyRelations())
        );
    }

    askFriendship(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'ask-friendship/' + userId, null, { observe: 'response' }));
    }

    cancelFriendship(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'cancel-friendship/' + userId, null, { observe: 'response' }));
    }

    acceptFriendship(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'accept-friendship/' + userId, null, { observe: 'response' }));
    }

    refuseFriendship(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'refuse-friendship/' + userId, null, { observe: 'response' }));
    }

    removeFriendship(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'remove-friendship/' + userId, null, { observe: 'response' }));
    }

    blockUser(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'block-user/' + userId, null, { observe: 'response' }));
    }

    unlockUser(userId: number) {
        return this.pipe(this.http.post<boolean>(this.userUrl + 'unlock-user/' + userId, null, { observe: 'response' }));
    }
}
