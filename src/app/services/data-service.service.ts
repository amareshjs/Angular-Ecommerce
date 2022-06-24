import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  eUrl="http://localhost:3000/earrings/";
  bUrl="http://localhost:3000/bracelets/";
  nUrl="http://localhost:3000/necklaces/";
  rUrl="http://localhost:3000/rings/";
  

  constructor(private http:HttpClient) { }

    getEarrings():Observable<any>{
      return this.http.get<any>(this.eUrl);
    }
    getBracelates():Observable<any>{
      return this.http.get<any>(this.bUrl);
    }
    getRings():Observable<any>{
      return this.http.get<any>(this.rUrl);
    }
    getNacklaces():Observable<any>{
      return this.http.get<any>(this.nUrl);
    }


    getSingleEarring(id:any):Observable<any>{
      return this.http.get<any>(this.eUrl+id);
    }

    getSingleBracelate(id:any):Observable<any>{
      return this.http.get<any>(this.bUrl+id);
    }
    getSingleRing(id:any):Observable<any>{
      return this.http.get<any>(this.rUrl+id);
    }
    getSingleNacklace(id:any):Observable<any>{
      return this.http.get<any>(this.nUrl+id);
    }
    

}
