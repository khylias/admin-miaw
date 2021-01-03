import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    constructor(private httpClient: HttpClient) { }

    getClients(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/clients');
    }

    addClient(data: Client) {
        return this.httpClient.post('http://localhost:3000/clients', data);
    }
    
    getClient(id: string): Observable<any> {
        return this.httpClient.get('http://localhost:3000/clients/' + id);
    }
}
