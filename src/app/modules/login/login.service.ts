import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private API_URL = environment.apiUrl;
    constructor(private http: HttpClient) {}

    // private loginURL = 'http://localhost:3030/heroes/login';
    private loginURL = `${this.API_URL}/heroes/login`;

    doLogin(username: string, password: string): Observable<any> {
        return this.http.post(
            this.loginURL,
            {
                username,
                password,
            },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        );
    }
}
