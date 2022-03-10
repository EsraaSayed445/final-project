import { Injectable } from '@angular/core';
import { Food_Order } from 'src/app/_models/product/food_order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
 
  constructor(private _httpClient: HttpClient) { }

  getAllProducts():Observable<Food_Order>{
    var x = this._httpClient.get<Food_Order>(environment.baseUrl + 'food_order');
    return x;
    
  }
}
