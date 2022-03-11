import { Injectable } from '@angular/core';
import { AllOrderResponse, Food_Order } from 'src/app/_models/product/food_order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product/product.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpClient: any;
  errorMessage: any;

  constructor(private _httpClient: HttpClient) { }

  getAllProducts():Observable<AllOrderResponse>{
    return this._httpClient.get<AllOrderResponse>(environment.baseUrl + 'food_order');


  }

  addProduct(product: any) {
    // this.productsArray.push(product);
    const body = product;
    console.log(body);
    console.log("addedorder item")
    return this._httpClient.post<any>(environment.baseUrl + 'food_order',body).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
   }


}
