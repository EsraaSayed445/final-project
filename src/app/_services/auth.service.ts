import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  (private httpService: HttpClient) { }

  login(user:User):Observable<any>{
    return this.httpService.post<any>(environment.baseUrl+'user/login',user)
      }

  }

  // getData() {
  //   return this.httpService.get('http://127.0.0.1:8000/api/foods');
  //  }

interface User{
  email:string;
  password:string;
}
