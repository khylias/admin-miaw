import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientsService } from '../services/clients.service';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
    public form: FormGroup;
    isEdit = false;

    constructor(private clientsService: ClientsService, 
        private fb: FormBuilder, 
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.initForm();
        this.isEdit = this.route.snapshot.data.edit;
        if(this.isEdit) {
            this.getData();
        }
    }

    add() {
        this.clientsService.addClient(this.form.value).subscribe(response => {
            this.router.navigate(['/clients']);
        });
    }

    update() {
        this.clientsService.updateClient(this.route.snapshot.paramMap.get('id'), this.form.value).subscribe(response => {

        })
    }

    submit() {
        if(this.isEdit) {
            this.update();
        } else {
            this.add();
        }
    }

    initForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            description: [''],
            date: [''],
            type: ['']
        });
    }

    getData() {
        this.clientsService.getClient(this.route.snapshot.paramMap.get('id')).subscribe(response => {
            this.form.patchValue(response);
        });
    }
}
