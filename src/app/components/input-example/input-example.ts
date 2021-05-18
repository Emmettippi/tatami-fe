import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'tatami-input',
    templateUrl: './input-example.html',
    // styleUrls: ['./login.component.css']
})
export class InputExampleComponent implements OnInit {

    private _value: string;
    @Input() set value(val: string) {
        this._value = val;
        this.valueChange.emit(this._value);
    }
    get value(): string {
        return this._value;
    }
    @Output() valueChange = new EventEmitter<string>();

    @Input() myInputClasses: string;
    @Input() type = 'text';

    ngOnInit() {
    }
}
