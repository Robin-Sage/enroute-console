
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewService{


  url = "http://192.168.43.178:5000/api/queryData";
  constructor(private http: HttpClient) { }

    getMedia(): Observable<any> {
      return this.http.post(this.url, {'language': 'english', 'genre': 'sports'});
   }

}
