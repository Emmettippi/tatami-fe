import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({ providedIn: 'root' })
export class GameService {

    gameRoot: string;

    constructor(
        private mainService: MainService
    ) { }
}
