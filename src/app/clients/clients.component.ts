import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client';
@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    clients: Client[] = [];
    constructor(private clientsService: ClientsService) { }

    ngOnInit(): void {
        this.getClients();
    }

    getClients() {
        this.clients = this.clientsService.getClients();
    }

}
