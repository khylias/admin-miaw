import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
    selector: 'app-client-item',
    templateUrl: './client-item.component.html',
    styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
    @Input() client: Client;
    constructor() { }

    ngOnInit(): void {
    }

}
