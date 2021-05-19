import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';
import { UserService } from '../../../entities/user';
import { BaseComponent } from '../../base/base.component';
import { MainService, LanguageService } from '../../../services';

@Component({
    selector: 'tatami-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {

    constructor(
        protected router: Router,
        protected route: ActivatedRoute,
        protected mainService: MainService,
        protected userService: UserService,
        protected languageService: LanguageService,
        private electronService: ElectronService
    ) {
        super(router, route, mainService, userService, languageService);
    }

    ngOnInit(): void {
    }

    createLobby() {

    }

    joinLobby() {

    }

    loadReplay() {

    }

    logout() {
        this.userService.logout();
        this.navigateTo('login');
    }

    quit() {
        this.electronService.ipcRenderer.send('close-me');
    }
}
