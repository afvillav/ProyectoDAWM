import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovDataService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { 

  }

  getMoves(index: any){
    return this.http.get<any>(`${this.baseUrl}/move/${index}`);
  }
}
