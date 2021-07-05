import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, timer } from 'rxjs';
import { map, switchMap, takeWhile } from 'rxjs/operators';
import { BaseComponent } from "../../base/base.component";
import { Lobby, LobbySearchDto, LobbyService } from './../../../entities/lobby';
import { MainService, LanguageService } from './../../../services';
import { UserService } from './../../../entities/user';

@Component({
    selector: 'tatami-lobby-search',
    templateUrl: './lobby-search.component.html',
    styleUrls: ['./lobby-search.component.css']
})
export class LobbySearchComponent extends BaseComponent implements OnInit, OnDestroy {

    get loading(): number {
        return this.mainService.loading;
    }

    filter = new LobbySearchDto();
    lobbies: Lobby[] = [];

    lobbyTimer: Subscription;

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService,
        private lobbyService: LobbyService
    ) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit() {
    }

    cleanFilters() {
        this.filter.name = null;
        this.filter.lobbyType = 'ALL';
        this.filter.page = 0;
        if (this.online) {
            this.filter.userId = this.loggedUser.id;
        }
        this.onSearch();
    }

    isSearchEnabled(filter?: LobbySearchDto): boolean {
        if (!filter) {
            filter = this.filter;
        }
        if (!filter) {
            return false;
        }
        return !!(filter.name || filter.lobbyType);
    }

    onFilterChange(event: any, filter: keyof LobbySearchDto) {
        if (filter === 'name' || filter === 'lobbyType') {
            this.filter[filter] = event;
        }
        this.filter.page = 0;
        this.onSearch();
    }

    onPageChange(newPage: number) {
        this.filter.page = newPage;
        this.onSearch();
    }

    onSearch() {
        if (this.isSearchEnabled()) {
            this.searchLobby()
                .subscribe((response) => {
                    if (this.lobbyTimer) {
                        this.lobbyTimer.unsubscribe();
                        this.lobbyTimer = null;
                    }

                    this.lobbyTimer = timer(0, 5000)
                        .pipe(
                            takeWhile(() => this.mainService.online),
                            switchMap(() => this.searchLobby())
                        ).subscribe((response) => {
                            // this.mainService.myRelations = response[1].body;
                        }, (error) => {
                            console.log(error);
                            // Should go to login
                        });
                }, (error) => {
                    console.log(error);
                });
        } else {
            this.lobbies = [];
        }
    }

    searchLobby() {
        this.jitter++;
        const jitter = this.jitter;
        return this.lobbyService.searchLobby(this.filter).pipe(
            takeWhile(() => jitter === this.jitter),
            map(response => {
                this.lobbies = response.body;
                return response;
            })
        );
    }

    back() {
        this.navigateTo({ 'left': 'menu' }, true);
    }

    ngOnDestroy() {
        if (this.lobbyTimer) {
            this.lobbyTimer.unsubscribe();
            this.lobbyTimer = null;
        }
    }
}
