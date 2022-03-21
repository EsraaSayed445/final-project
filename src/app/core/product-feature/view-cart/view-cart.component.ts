import { Component, OnInit } from '@angular/core';
import { Food_Order, LastOrder} from 'src/app/_models/product/food_order.model';
import { Product } from 'src/app/_models/product/product.model';
import { OrderService } from 'src/app/_services/product/order.service';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
foods:Product[]=[];
totalPrice:number=0;
addedOrder:any;
orders:any[]=[];
order_id:number=0;
  constructor(private productService: ProductService , private orderService: OrderService) { }

  ngOnInit(): void {

  for(var i=0; i< (this.productService.getproductsfromcart()).length ;i++){
    this.foods.push(this.productService.getproductsfromcart()[i]);
  }
  

    this.calculateTotalPrice();
    this.calculateTotalPriceFoodType();

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
    
    this.orderService.getAllFoodsOrders().subscribe(
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
      this.orderService.addOrder(this.orders);
       
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
 
 
        console.log(this.orders);
     
        // console.log( this.addedOrder);
        console.log("added order")
       this.orderService.addOrder(this.orders);
        



      }
    }
    );
 


   
 }

}
