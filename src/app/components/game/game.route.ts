import { Routes } from '@angular/router';
import { LightsoutInfiniteComponent } from './lightsout/infinite/infinite.component';

export const GAME_ROUTES: Routes = [
    {
        path: 'lightsout-infinite',
        component: LightsoutInfiniteComponent,
        outlet: 'game'
    },
    // {
    //     path: 'menu',
    //     component: MenuComponent,
    //     outlet: 'left'
    // },
    // {
    //     path: 'lobbies',
    //     component: LobbySearchComponent,
    //     outlet: 'left'
    // },
    // {
    //     path: 'other-games',
    //     component: OtherGamesComponent,
    //     outlet: 'left'
    // },
    // {
    //     path: 'lightsout-menu',
    //     component: LightsoutMenuComponent,
    //     outlet: 'left'
    // },
    // {
    //     path: 'lightsout-rules',
    //     component: LightsoutRulesComponent,
    //     outlet: 'left'
    // },
    // {
    //     path: '*',
    //     component: MenuComponent,
    //     outlet: 'left'
    // }
    // , {
    //     path: 'lobby/:id',
    //     component: null,
    //     outlet: 'left'
    // }
];
