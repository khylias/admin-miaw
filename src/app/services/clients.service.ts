import { Injectable } from '@angular/core';

import { Client } from '../models/client';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    clientsData: Client[] = [
        {
            name: 'La Cantiine',
        },
        {
            name: 'Aquarium de La Rochelle',
        },
        {
            name: 'Le Bathyscaphe',
        }
    ];

    constructor() { }

    getClients(): Client[] {
        return this.clientsData;
    }
}
