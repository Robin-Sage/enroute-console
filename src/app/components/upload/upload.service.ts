import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url="";
  constructor(private http: HttpClient) { }

     uploadFile(data):Observable<any>{
       console.log(data)
      return this.http.post(this.url,data);
   }
   uploadArticle(data):Observable<any>{
    console.log(data)
   return this.http.post(this.url,data);
}
   
}
