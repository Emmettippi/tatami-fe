import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { MainService } from './services/main-service.service';
import { UserService } from './entities/user/user.service';
import { UserRelationService } from './entities/user-relation/user-relation.service';

@NgModule({
    declarations: [
        AppComponent
        , LoginComponent
    ],
    imports: [
        BrowserModule
        , FormsModule
        , AppRoutingModule
        , HttpClientModule
    ],
    providers: [
        MainService
        , UserService
        , UserRelationService
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
