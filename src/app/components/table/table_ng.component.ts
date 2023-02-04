import { Component, Input, OnInit } from '@angular/core';

interface TableData {
    name?: string;
    age?: number;
    address?: string;
}

@Component({
    selector: 'table_component',
    templateUrl: './table_ng.component.html',
    styleUrls: ['./table_ng.component.css'],
})
export class TableComponent implements OnInit {

    @Input() data: TableData[] = []

    constructor() {
    }
    ngOnInit(): void { }
}
