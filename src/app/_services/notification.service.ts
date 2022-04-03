import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _httpClient:HttpClient) { }

  getNotification ():Observable<any>{
return this._httpClient.get<any>(environment.baseUrl +"notifications")
  }
}
