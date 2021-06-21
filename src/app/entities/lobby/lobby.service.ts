import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lobby } from './lobby.model';
import { MainService } from '../../services/main.service';
import { Observable, Subscription, timer } from 'rxjs';
import { startWith, switchMap, takeWhile, map } from 'rxjs/operators';
import { getQueryParams } from './../../core/constants';
import { LobbySearchDto } from './';
import { Percentage } from './../percentage';


@Injectable({ providedIn: 'root' })
export class LobbyService {

    get lobbyUrl(): string {
        return this.mainService.MAIN_URL + 'lobby/';
    }
    get ipAddress(): string {
        return this.mainService.ipAddress;
    }

    currentLobby: Lobby;
    updateLastInLobby: Subscription;

    constructor(
        private http: HttpClient,
        private mainService: MainService
    ) { }

    isValidLobby(lobby: Lobby): Map<string, string> {
        const errorMap = new Map<string, string>();
        if (!lobby.lobbyName) {
            errorMap.set('lobbyName', 'lobby.lobbyName.error');
        }
        return errorMap;
    }

    startStopLobbyUpdate(start = true) {
        if (start && !this.updateLastInLobby) {
            this.updateLastInLobby = timer(0, 1000)
                .pipe(
                    startWith(0),
                    takeWhile(() => !!this.currentLobby),
                    switchMap(() => this.updateLastOnline(this.currentLobby.id))
                ).subscribe((response) => {
                    // this.currentLobby = response.body;
                }, (error) => {
                    console.log(error);
                });
        } else if (!start && !!this.updateLastInLobby) {
            this.updateLastInLobby.unsubscribe();
            this.updateLastInLobby = null;
        }
    }

    createLobby(lobby: Lobby) {
        const createLobbyDto = {
            lobbyType: lobby.lobbyType,
            name: lobby.lobbyName
        };
        return this.http.post<Lobby>(this.lobbyUrl + 'create', createLobbyDto, { observe: 'response' })
            .pipe(
                map((response) => {
                    this.currentLobby = response.body;
                    return response;
                })
            );;
    }

    joinLobby(lobbyId: number) {
        return this.http.post<Percentage>(this.lobbyUrl + 'join/' + lobbyId, null, { observe: 'response' });
    }

    getOne(lobbyId: number) {
        return this.http.get<Lobby>(this.lobbyUrl + lobbyId, { observe: 'response' });
    }

    updateVisibility(lobbyId: number, visibility: string) {
        return this.http.post<Lobby>(this.lobbyUrl + `set-visibility/${lobbyId}/${visibility}`, null, { observe: 'response' })
            .pipe(
                map((response) => {
                    this.currentLobby = response.body;
                    return response;
                })
            );
    }

    updateLobbyName(lobbyId: number, name: string) {
        return this.http.post<Lobby>(this.lobbyUrl + `set-name/${lobbyId}/${name}`, null, { observe: 'response' })
            .pipe(
                map((response) => {
                    this.currentLobby = response.body;
                    return response;
                })
            );
    }

    exit(lobbyId: number) {
        return this.http.post<any>(this.lobbyUrl + `exit/${lobbyId}`, null, { observe: 'response' })
            .pipe(
                map((response) => {
                    this.currentLobby = null;
                    return response;
                })
            );
    }

    updateLastOnline(lobbyId: number) {
        return this.http.post<Lobby>(this.lobbyUrl + `update-last-online/${lobbyId}`, null, { observe: 'response' })
            .pipe(
                map((response) => {
                    this.currentLobby = response.body;
                    return response;
                })
            );
    }

    searchLobby(lobbyParams: LobbySearchDto) {
        const _lobbyParams = Object.assign({}, lobbyParams);
        if (_lobbyParams && _lobbyParams.lobbyType && _lobbyParams.lobbyType === 'ALL') {
            _lobbyParams.lobbyType = null;
        }
        return this.http.get<Lobby[]>(this.lobbyUrl + 'search' + getQueryParams(lobbyParams), { observe: 'response' });
    }
}
