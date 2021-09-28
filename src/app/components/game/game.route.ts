import { Routes } from '@angular/router';
import { LightsoutInfiniteComponent } from './lightsout/infinite/infinite.component';
import { LightsoutTrainingComponent } from './lightsout/training/training.component';

export const GAME_ROUTES: Routes = [
    {
        path: 'lightsout-infinite',
        component: LightsoutInfiniteComponent,
        outlet: 'game'
    },
    {
        path: 'lightsout-training',
        component: LightsoutTrainingComponent,
        outlet: 'game'
    },
];
