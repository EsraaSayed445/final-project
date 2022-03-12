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
 //  orderDetail:any[]=[];
//  myOrders:any[]=[];
// quantity:any[]=[];
// food_id:any[]=[];
// order_id:any[]=[];
// order_id:number=1;
// lastOrder:{quantity:number,food_id:number,order_id:number}[]=[];
  constructor(private productService: ProductService , private orderService: OrderService) { }

  ngOnInit(): void {

   for(var i=0; i< (this.productService.getproductsfromcart()).length ;i++){
     this.foods.push(this.productService.getproductsfromcart()[i]);
   }
  //  this.orders[0][0]="99";
  //  console.log(this.orders);

  //  for(var i=0; i< this.foods.length ;i++){
  //   this.orders[i][0]=this.foods[i].id;
  //   this.orders[i][1]=this.foods[i].cartCounter;
  //   this.orders[i][2]=1;


  //    console.log(this.orders[i]);
     
  //   //  this.food_id[i]=this.foods[i].id;
  //   //  this.order_id[i]=1;


     
  //   // this.food_orders[i].food[i].cartCounter=this.foods[i].cartCounter;
  // }
  // console.log(this.lastOrder);
  // this.lastOrder[0].quantity[0]="5";
  // console.log(this.lastOrder);

  // console.log("hena");
  // console.log(this.quantity);
  // console.log(this.food_id);
  // console.log(this.order_id);

  

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
