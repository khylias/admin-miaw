import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
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
    constructor() { }

    ngOnInit(): void {
    }

}
