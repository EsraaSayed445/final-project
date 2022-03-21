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
orderId!:number;
  constructor(private _httpClient: HttpClient) { }

  getAllFoodsOrders():Observable<any>{
    return this._httpClient.get<any>(environment.baseUrl + 'food_order');
  }

  getAllOrders():Observable<AllOrderResponse>{
    return this._httpClient.get<AllOrderResponse>(environment.baseUrl + 'orders');
  }
  addOrder(order: any) {

    
    // this.productsArray.push(product);
    const body = order;
    this.orderId=body[0].order_id;
    console.log(this.orderId);
    
    console.log(body);
    console.log("addedorder item")

   
    this._httpClient.post<any>(environment.baseUrl + 'orders',2).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error on order!', error);
      }
  })

    for(let myOrder of body){
     
       this._httpClient.post<any>(environment.baseUrl + 'food_order',myOrder).subscribe({
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error on food-order!', error);
        }
    })


    }
    return 1;
   }
}
