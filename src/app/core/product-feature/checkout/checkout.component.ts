import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { HttpClient} from '@angular/common/http'
import { TransactionService } from 'src/app/_services/product/transaction.service';
import { OrderService } from 'src/app/_services/product/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
InvoiceUrl!:string;
foods:Product[]=[];
totalPrice:number=0;
errorMessage: any;
orderId!:number;

  constructor(private productService: ProductService,
    private _TransactionService:TransactionService,
    private _OrderService:OrderService
 ) { }

  ngOnInit(): void {

   for(var i=0; i< (this.productService.getproductsfromcart()).length ;i++){
     this.foods.push(this.productService.getproductsfromcart()[i]);
   }
    this.calculateTotalPrice();
    this.calculateTotalPriceFoodType();
  }



// send form to post in db
 onAddTransactionInfo(transData:any,totalPrice:number) {
  var obj=transData;
  obj.total_price=totalPrice;
   obj.status='paid';
  obj.order_id= this.getOrderId();
  console.log(obj);
  this._TransactionService.postAllTransactionData(obj);
  setTimeout(()=>{
    window.location.href =this._TransactionService.response.InvoiceURL;
}, 3000);

}


// get order id
getOrderId(){
 this.orderId= this._OrderService.orderId;
 console.log(this.orderId);
 return this.orderId;
}

  // calculate total price for all types of foods
  calculateTotalPrice(){
   for(var i=0; i< (this.foods).length ;i++){
     var foodPrice=this.foods[i].price;
     var foodPriceConvertToNum: number = +foodPrice;
      this.totalPrice +=  foodPriceConvertToNum * this.foods[i].cartCounter;
   }
     return this.totalPrice;
  }

  // calculate total price for one type of food
  calculateTotalPriceFoodType(){
    for(var i=0; i< (this.foods).length ;i++){
      var foodPrice=this.foods[i].price;
      var foodPriceConvertToNum: number = +foodPrice;
      this.foods[i].totalPriceFoodType= foodPriceConvertToNum * this.foods[i].cartCounter;
    }
   }


}
