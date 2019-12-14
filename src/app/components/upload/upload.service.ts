import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };
  url="http://192.168.43.178:5000/api/uploadData";
  constructor(private http: HttpClient) { }
     uploadFile(data):Observable<any>{
       console.log(data);
      return this.http.post(this.url,data,this.httpOptions);
   }

}


