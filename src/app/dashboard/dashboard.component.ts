import { Component, OnInit } from '@angular/core';

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

    clients = [
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

    ngOnInit(): void {
    }

}
