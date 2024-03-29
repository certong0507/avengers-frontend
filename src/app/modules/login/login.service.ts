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

    doLogin(username: string, password: string): Observable<any> {
        return this.http.post(
            `${this.API_URL}/heroes/login`,
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
