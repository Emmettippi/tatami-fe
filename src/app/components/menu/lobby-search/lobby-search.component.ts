import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "../../base/base.component";
import { Lobby, LobbySearchDto, LobbyService } from './../../../entities/lobby';
import { MainService, LanguageService } from './../../../services';
import { UserService } from './../../../entities/user';

@Component({
    selector: 'tatami-lobby-search',
    templateUrl: './lobby-search.component.html',
    styleUrls: ['./lobby-search.component.css']
})
export class LobbySearchComponent extends BaseComponent implements OnInit {

    get loading(): number {
        return this.mainService.loading;
    }

    filter = new LobbySearchDto();
    jitter: number;
    lobbies: Lobby[] = [];

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
            this.jitter++;
            const jitter = this.jitter;
            this.lobbyService.searchLobby(this.filter)
                .subscribe((response) => {
                    if (jitter === this.jitter) {
                        this.lobbies = response.body;
                    }
                }, (error) => {
                    console.log(error);
                });
        } else {
            this.lobbies = [];
        }
    }

    back() {
        this.navigateTo({'left': 'menu'}, true);
    }
}
