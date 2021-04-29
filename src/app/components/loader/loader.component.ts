import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './../base/base.component';

@Component({
    selector: 'tatami-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent extends BaseComponent implements OnInit {
    ngOnInit(): void {

    }
}
