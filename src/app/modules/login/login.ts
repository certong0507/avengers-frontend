import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss'],
})
export class LoginPage {
    title = 'Avengers Frontend';
    loginFailed = false;
    loginFailedErrorMessage = '';
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private loginService: LoginService, private router: Router) {}

    handleLogin() {
        this.loginService
            .doLogin(
                this.loginForm.value.username,
                this.loginForm.value.password
            )
            .subscribe(
                hero => {
                    this.loginFailed = false;
                    hero.response.token = hero.token;
                    localStorage.setItem('hero', JSON.stringify(hero));
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.loginFailed = true;
                    this.loginFailedErrorMessage = error.error.errorMessage;
                    console.log('error: ', error);
                }
            );
    }
}
