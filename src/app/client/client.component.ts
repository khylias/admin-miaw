import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    client: Client;
    constructor(private clientsService: ClientsService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.clientsService.getClient(this.route.snapshot.paramMap.get('id')).subscribe(response => {
            this.client = response;
        });
    }

    deleteClient() {
        this.clientsService.deleteClient(this.route.snapshot.paramMap.get('id')).subscribe(response => {
            this.router.navigate(['/clients']);
        });
    }
}
