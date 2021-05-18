import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SocialComponent } from './social/social.component';

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
        path: '*',
        component: MenuComponent,
        outlet: 'left'
    }
    // , {
    //     path: 'lobby',
    //     component: null,
    //     outlet: 'left'
    // }
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
