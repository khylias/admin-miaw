import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public tokenStorageService: TokenStorageService, private router: Router) {}

    disconnect() {
        this.tokenStorageService.deleteToken();
        this.router.navigate(['/connexion']);
    }
}
