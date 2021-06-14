import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';
import { MenuComponent } from './menu/menu.component';
import { SocialSubComponent } from './social-list/social-list.component';
import { SocialComponent } from './social/social.component';
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
        , SocialComponent
        , SocialSubComponent

        , ChevronDownComponent
        , ChevronLeftComponent
        , ChevronRightComponent
        , ChevronUpComponent
    ],
    exports: [
        ChevronDownComponent
        , ChevronLeftComponent
        , ChevronRightComponent
        , ChevronUpComponent
    ]
})
export class MainMenuModule { }
