import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
})
export class HomePage {
    constructor(private router: Router) {
        console.log('HomePage constructor()...');
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    navToDashboard() {
        this.router.navigate(['dashboard']);
    }

    navToQRGenerator() {
        this.router.navigate(['qr/generator']);
    }

    navToQRReader() {
        this.router.navigate(['qr/reader']);
    }
}
