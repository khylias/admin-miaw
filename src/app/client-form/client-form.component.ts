import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientsService } from '../services/clients.service';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
    name = '';
    public form: FormGroup;

    constructor(private clientsService: ClientsService, 
        private fb: FormBuilder, 
        private router: Router) { }

    ngOnInit(): void {
        this.initForm();
    }

    add() {
        this.clientsService.addClient(this.form.value).subscribe(response => {
            this.router.navigate(['/clients']);
        });
    }

    initForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            description: [''],
            date: [''],
            type: ['']
        });
    }
}
