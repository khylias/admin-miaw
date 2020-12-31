import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';

import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder, private userService: UserService, private tokenStorageService: TokenStorageService) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        this.userService.connect(this.form.value).subscribe(response => {
            this.tokenStorageService.setToken(response['access_token']);   
        })
    }
}
