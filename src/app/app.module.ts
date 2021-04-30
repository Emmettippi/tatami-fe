import { LoaderComponent } from './components/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BaseComponent } from './components/base/base.component';

import { MainService, LanguageService } from './services';
import { UserService } from './entities/user/user.service';
import { UserRelationService } from './entities/user-relation/user-relation.service';

@NgModule({
    declarations: [
        AppComponent
        , LoaderComponent
        , LoginComponent
        , BaseComponent
    ],
    imports: [
        BrowserModule
        , BrowserAnimationsModule
        , FormsModule
        , AppRoutingModule
        , HttpClientModule
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
