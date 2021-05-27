import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoaderComponent } from './components/loader/loader.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';

import { MainService, LanguageService, HttpErrorInterceptor } from './services';
import { UserService } from './entities/user/user.service';
import { UserRelationService } from './entities/user-relation/user-relation.service';

import { MainMenuModule } from './components/menu/menu.module';
import { MainMenuComponent } from './components/menu/main-menu.component';

// import { ChevronDownComponent, ChevronUpComponent } from './components/svgs';

@NgModule({
    declarations: [
        AppComponent
        , LoaderComponent
        , BaseComponent

        , LoginComponent
        , MainMenuComponent

        // , ChevronDownComponent
        // , ChevronUpComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
        , FormsModule
        , AppRoutingModule
        , HttpClientModule
        , MainMenuModule
        , NgxElectronModule
    ],
    providers: [
        MainService
        , LanguageService
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
