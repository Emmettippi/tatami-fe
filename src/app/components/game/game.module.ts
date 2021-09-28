import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';

import { LightsoutTileComponent } from './lightsout/tile/tile.component';
import { LightsoutInfiniteComponent } from './lightsout/infinite/infinite.component';
import { LightsoutTileTableComponent } from './lightsout/tile-table/tile-table.component';

import { LoaderComponent } from '../loader/loader.component';
import { ChevronDownComponent, ChevronUpComponent, ChevronLeftComponent, ChevronRightComponent } from '../svgs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxElectronModule
    ],
    declarations: [
        LightsoutTileComponent
        , LightsoutTileTableComponent
        , LightsoutInfiniteComponent
    ],
    exports: [
    ]
})
export class GameModule { }
