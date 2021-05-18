import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/menu/main-menu.component';
import { SOCIAL_ROUTES, MENU_ROUTES } from './components/menu/menu.route';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'login',
                component: LoginComponent
            }
        ])
        , RouterModule.forChild([{
            path: 'main-menu',
            component: MainMenuComponent,
            children: [
                ...MENU_ROUTES
                , ...SOCIAL_ROUTES
            ]
        }])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
