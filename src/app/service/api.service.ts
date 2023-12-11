import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL:string='http://10.30.199.19:8080/api/v1/students';

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.URL);
  }

  public getDataById():Observable<any>{
    return this.http.get<any>(this.URL);
  }
}
