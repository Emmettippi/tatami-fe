import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/user/user.model';
import { MainService } from 'src/app/services/main-service.service';

@Component({
    selector: 'tatami-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    get ipAddress(): string {
        return this.mainService.ipAddress;
    }

    set ipAddress(value: string) {
        this.mainService.ipAddress = value;
    }

    isRegistration: boolean;
    user: User;
    errorMessage: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private mainService: MainService
    ) {
    }

    ngOnInit(): void {
        this.isRegistration = false;
        this.user = new User();
    }

    login() {
        this.errorMessage = 'Test.';
    }

    loginOffline() {
        this.errorMessage = 'Offline mode.';
    }

    registration(isRegistration: boolean) {
        this.user = new User();
        this.resetErrorMessage();
        this.isRegistration = isRegistration;
    }

    onRegistration() {
        this.errorMessage = 'RegistrationTime.';
    }

    resetErrorMessage() {
        this.errorMessage = null;
    }

    isLoginEnabled() {
        const regexp = new RegExp('\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}');
        let enabled = this.user.username
            && this.user.password
            && this.ipAddress
            && regexp.test(this.ipAddress);
        if (enabled) {
            const ipv4 = this.ipAddress.split('.');
            for (const byte of ipv4) {
                const num = parseInt(byte, 10);
                if (isNaN(num) || num < 0 || num > 255) {
                    enabled = false;
                    break;
                }
            }
        }
        return enabled;
    }
}
