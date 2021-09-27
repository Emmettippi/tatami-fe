import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SocialComponent } from './social/social.component';
import { LobbySearchComponent } from './lobby-search/lobby-search.component';
import { OtherGamesComponent } from './other-games/other-games.component';

import { LightsoutMenuComponent } from './lightsout-menu/lightsout-menu.component';
import { LightsoutRulesComponent } from './lightsout-rules/lightsout-rules.component';

export const MENU_ROUTES: Routes = [
    {
        path: '',
        component: MenuComponent,
        outlet: 'left'
    },
    {
        path: 'menu',
        component: MenuComponent,
        outlet: 'left'
    },
    {
        path: 'lobbies',
        component: LobbySearchComponent,
        outlet: 'left'
    },
    {
        path: 'other-games',
        component: OtherGamesComponent,
        outlet: 'left'
    },
    {
        path: 'lightsout-menu',
        component: LightsoutMenuComponent,
        outlet: 'left'
    },
    {
        path: 'lightsout-rules',
        component: LightsoutRulesComponent,
        outlet: 'left'
    },
    {
        path: '*',
        component: MenuComponent,
        outlet: 'left'
    }
    // , {
    //     path: 'lobby/:id',
    //     component: null,
    //     outlet: 'left'
    // }
];
export const SOCIAL_ROUTES: Routes = [
    {
        path: '',
        component: SocialComponent,
        outlet: 'right'
    },
    {
        path: 'social',
        component: SocialComponent,
        outlet: 'right'
    },
    {
        path: '*',
        component: SocialComponent,
        outlet: 'right'
    }
];

export const MAIN_MENU_ROUTES: Routes = [

];
