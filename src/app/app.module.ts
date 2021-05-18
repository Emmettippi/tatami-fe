import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoaderComponent } from './components/loader/loader.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';
import { InputExampleComponent } from './components/input-example/input-example';
import { MainMenuComponent } from './components/menu/main-menu.component';

import { MainService, LanguageService } from './services';
import { UserService } from './entities/user/user.service';
import { UserRelationService } from './entities/user-relation/user-relation.service';

import { MainMenuModule } from './components/menu/menu.module';

@NgModule({
    declarations: [
        AppComponent
        , LoaderComponent
        , BaseComponent

        , LoginComponent
        , MainMenuComponent
        , InputExampleComponent
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
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
