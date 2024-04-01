import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Olona } from "../model/Olona";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8080/mety/olona';

@Injectable({
    providedIn : 'root'
})
export class OlonaService{

    constructor(private http: HttpClient) { }

    getAll(): Observable<Olona[]> {
        return this.http.get<Olona[]>(baseUrl);
    }

    create(data: Olona): Observable<any> {
        return this.http.post(baseUrl, data);
    }

    update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}