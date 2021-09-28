import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';

import { MainService, LanguageService, HttpErrorInterceptor, GameService } from './services';
import { UserService } from './entities/user/user.service';
import { UserRelationService } from './entities/user-relation/user-relation.service';

import { MainMenuModule } from './components/menu/menu.module';
import { MainMenuComponent } from './components/menu/main-menu.component';
import { GameModule } from './components/game/game.module';
import { GameComponent } from './components/game/game.component';

@NgModule({
    declarations: [
        AppComponent
        , BaseComponent

        , LoginComponent
        , MainMenuComponent
        , GameComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
        , FormsModule
        , AppRoutingModule
        , HttpClientModule
        , MainMenuModule
        , GameModule
        , NgxElectronModule
    ],
    providers: [
        MainService
        , LanguageService
        , GameService
        , UserService
        , UserRelationService
        , {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
            deps: [
                UserService, Router
            ]
        }
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
