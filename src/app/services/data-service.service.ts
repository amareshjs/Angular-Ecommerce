import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  Url="http://localhost:3000/products/";
  

  constructor(private http:HttpClient) { }

    getProducts():Observable<any>{
      return this.http.get<any>(this.Url);
    }

    getSingleProducts(data:any):Observable<any>{
      return this.http.get<any>(this.Url+data);
    }
}
