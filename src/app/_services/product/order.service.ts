import { Injectable } from '@angular/core';
import { AllOrderResponse, Food_Order } from 'src/app/_models/product/food_order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product/product.model';
import {AuthenticationService}  from 'src/app/_services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpClient: any;
  errorMessage: any;
user:any;
myuser:any[]=[];
orderId!:number;
  constructor(private _httpClient: HttpClient,private _auth:AuthenticationService) { }

  getAllFoodsOrders():Observable<any>{
    return this._httpClient.get<any>(environment.baseUrl + 'food_order');

  }
  
  getFoodsOrdersById(id:number):Observable<any>{
    return this._httpClient.get<any>(environment.baseUrl + 'food_order'+id);

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
   this._auth.user().subscribe(
     (res)=>{
      this.user=res;
       console.log(this.user.id);

      this.myuser.push({
        "user_id": this.user.id,
      }); 

       this._httpClient.post<any>(environment.baseUrl + 'orders',this.myuser[0]).subscribe({
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error on order!', error);
            }
        })

       for(let myOrder of body){
           console.log(myOrder);
        this._httpClient.post<any>(environment.baseUrl + 'food_order',myOrder).subscribe({
         error: error => {
             this.errorMessage = error.message;
             console.error('There was an error on food-order!', error);
         }
     })
 
 
     }
     }

   )

  //   this._httpClient.post<any>(environment.baseUrl + 'orders',this.user.id).subscribe({
  //     error: error => {
  //         this.errorMessage = error.message;
  //         console.error('There was an error on order!', error);
  //     }
  // })


    return 1;
   }
}
