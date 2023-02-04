import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
})
export class NameComponent implements OnInit {

    @Input() userName: string;

    constructor() {
        this.userName = 'John Doe';
    }
    ngOnInit(): void { }
}
