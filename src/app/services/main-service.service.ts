import { Injectable } from '@angular/core';
import { User } from '../entities/user/user.model';

@Injectable({ providedIn: 'root' })
export class MainService {

    public online: boolean;
    public logged: User;
    public ipAddress: string;
}
