import { MainService } from './services/main.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private mainService: MainService
    ) { }

    ngOnInit() {
        this.router.navigate(['/login']);
    }
}
