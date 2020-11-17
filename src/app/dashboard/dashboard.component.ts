import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    title = 'admin-miaw';
    user = {
        name: 'Jean'
    };

    skills = [
        {
            name: 'Développement WordPress',
            // logo: 'assets/wordpress.jpg'
            logo: null
        },
        {
            name: 'Développement Front-end',
            logo: null
        },
        {
            name: 'Webdesign',
            logo: null
        }
    ];

    clients: Client[] = [];

    constructor(private clientsService: ClientsService) { }

    ngOnInit(): void {
    }

    getClients() {
        this.clients = this.clientsService.getClients();
    }
}
