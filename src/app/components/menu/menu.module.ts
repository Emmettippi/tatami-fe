import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';

import { LoaderComponent } from '../loader/loader.component';

import { MenuComponent } from './menu/menu.component';
import { SocialSubComponent } from './social-list/social-list.component';
import { SocialComponent } from './social/social.component';
import { ProfileComponent } from './profile/profile.component';
import { LobbySearchComponent } from './lobby-search/lobby-search.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { LightsoutMenuComponent } from './lightsout-menu/lightsout-menu.component'
import { LightsoutRulesComponent } from './lightsout-rules/lightsout-rules.component';
import { ChevronDownComponent, ChevronUpComponent, ChevronLeftComponent, ChevronRightComponent } from '../svgs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxElectronModule
    ],
    declarations: [
        MenuComponent
        , LoaderComponent
        , SocialComponent
        , SocialSubComponent
        , ProfileComponent
        , LobbySearchComponent
        , OtherGamesComponent

        , LightsoutMenuComponent
        , LightsoutRulesComponent

        , ChevronDownComponent
        , ChevronLeftComponent
        , ChevronRightComponent
        , ChevronUpComponent
    ],
    exports: [
        LoaderComponent

        , ChevronDownComponent
        , ChevronLeftComponent
        , ChevronRightComponent
        , ChevronUpComponent
    ]
})
export class MainMenuModule { }
