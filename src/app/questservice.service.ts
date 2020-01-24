import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Quest} from './Quest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'application/json'
  })}


@Injectable({
  providedIn: 'root'
})



export class QuestserviceService {
  apiUrl: string = 'https://qestt.herokuapp.com';

  constructor(private http: HttpClient) { }


  getVehiclesByColor(search: string): Observable<Quest[]>{
    const url = `${this.apiUrl}/${search}`;
    return this.http.get<Quest[]>(url, httpOptions);
  }
}
