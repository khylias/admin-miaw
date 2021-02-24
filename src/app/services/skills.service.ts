import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {

    constructor(private httpClient: HttpClient) { }

    getSkill(id: string): Observable<any> {
        return this.httpClient.get('http://localhost:3000/skills/' + id);
    }
}
