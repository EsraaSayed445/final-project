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

order_id:number=0;
orders:any[]=[];
addedOrder:any;

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
  this.onAddOrder(this.foods);
  console.log(this.foods);
  var obj=transData;
  obj.total_price=totalPrice;
  //  obj.status='paid';

  setTimeout(()=>{
    obj.order_id= this._OrderService.orderId;
    console.log(this._OrderService.orderId);
  this._TransactionService.postAllTransactionData(obj);

},3000);



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

   onAddOrder(order:any[]) {

    this._OrderService.getAllFoodsOrders().subscribe(
      (res)=>{
        if(res.data.length >= 1){
       console.log(res.data[res.data.length-1].order.id);
       this.order_id=res.data[res.data.length-1].order.id;
       this.order_id++;


       console.log(res.data[res.data.length-1]);

       this.addedOrder = order;
       for(var i=0; i< this.addedOrder.length ;i++){

         this.orders.push({
           food_id: this.addedOrder[i].id,
           quantity:this.addedOrder[i].cartCounter,
           order_id: this.order_id
       });


       }


       console.log(this.orders);

       // console.log( this.addedOrder);
       console.log("added order")
      this._OrderService.addOrder(this.orders);

    //  this.router.navigateByUrl('/product/listing');
      }else{
        this.order_id=1;

        this.addedOrder = order;
        for(var i=0; i< this.addedOrder.length ;i++){

          this.orders.push({
            food_id: this.addedOrder[i].id,
            quantity:this.addedOrder[i].cartCounter,
            order_id: this.order_id
        });


        }


        // console.log( this.addedOrder);
        console.log("added order")
       this._OrderService.addOrder(this.orders);





      }
    }
    );




 }

}
