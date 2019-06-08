import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private API_URL = environment.apiUrl;

    constructor(private http: HttpClient) {}

    addHero(name: string): Observable<any> {
        return this.http.post(
            `${this.API_URL}/heroes/add-hero`,
            {
                name,
            },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
            }
        );
    }
}
