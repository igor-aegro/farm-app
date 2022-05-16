import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Farm } from "./farm";

@Injectable({
    providedIn: 'root'
})
export class FarmService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }
    
    public getFarms(): Observable<Farm[]> {
        return this.http.get<Farm[]>(`${this.apiServerUrl}/api/v1/farms`);    
    }

    public addFarm(farm: Farm): Observable<Farm> {
        return this.http.post<Farm>(`${this.apiServerUrl}/api/v1/farms`, farm);    
    }

    public updateFarm(farm: Farm): Observable<Farm> {
        return this.http.put<Farm>(`${this.apiServerUrl}/api/v1/farms/${farm.id}`, farm);    
    }

    // public deleteFarm(farmId: string): Observable<void> {
    //     return this.http.delete<void>(`${this.apiServerUrl}/farm/delete/${farmId}`);   
    // }

}
