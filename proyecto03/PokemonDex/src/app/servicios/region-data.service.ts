import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionDataService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {

   }
  
   getRegions(index: any){
    return this.http.get<any>(`${this.baseUrl}/pokedex/${index}`);
  }
}
