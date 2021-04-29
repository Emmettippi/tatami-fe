import { Injectable } from '@angular/core';
import { User } from '../entities/user/user.model';

@Injectable({ providedIn: 'root' })
export class MainService {

    get MAIN_URL(): string {
        return 'http://' + this.ipAddress + ':8080/api/';
    }

    public online: boolean;
    public logged: User;
    public ipAddress: string;
    public readonly IP_REGEX = new RegExp('^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$');
    public language: string;
    public loading = 0;
}
