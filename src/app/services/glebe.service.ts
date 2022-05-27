import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Glebe } from "../models/glebe.model";

@Injectable({
    providedIn: 'root'
})
export class GlebeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }
    
    public getGlebes(): Observable<Glebe[]> {
        return this.http.get<Glebe[]>(`${this.apiServerUrl}/api/v1/glebes`);    
    }

    // public getGlebeById(id: string): Observable<Glebe> {
    //     return this.http.get<Glebe>(`${this.apiServerUrl}/api/v1/glebes/${id}`);
    // }

    public addGlebe(farmId: string, glebe: Glebe): Observable<Glebe> {
        return this.http.post<Glebe>(`${this.apiServerUrl}/api/v1/${farmId}/glebe`, glebe);    
    }

    // public updateGlebe(glebe: Glebe): Observable<Glebe> {
    //     return this.http.put<Glebe>(`${this.apiServerUrl}/api/v1/glebes/${glebe.id}`, glebe);    
    // }

    // public deleteGlebe(glebeId: string): Observable<void> {
    //     return this.http.delete<void>(`${this.apiServerUrl}/api/v1/glebes/${glebeId}`);   
    // }

}