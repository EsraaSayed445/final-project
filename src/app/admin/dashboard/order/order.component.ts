import { Component, OnInit } from '@angular/core';
import { Food_Order } from 'src/app/_models/product/food_order.model';
import { Order } from 'src/app/_models/product/order.model';
import { AllProductResponse, Product } from 'src/app/_models/product/product.model';
import { OrderService } from 'src/app/_services/product/order.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TransactionService } from 'src/app/_services/product/transaction.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderDetail:Food_Order[]=[];
  order:any[]=[];
  food:any[]=[];
  addProduct:any;
  response!:any;
  phones:any[]=[];
  addresses:any[]=[];
  myobj:any;
  constructor(private _OrderService: OrderService , private _ProductService: ProductService, private _transactionService:TransactionService) { }

  ngOnInit(): void {

    this._OrderService.getAllFoodsOrders().subscribe(
      (res)=>{
         this.orderDetail=res.data;
        //  array of 2 aerray food and order
         console.log(res.data);
         for (let i = 0; i < this.orderDetail.length; i++) {
          this.food.push(this.orderDetail[i].food);
          this.order.push(this.orderDetail[i].order);

        }

this._transactionService.getAllTransactions().subscribe(
  (res)=>{
    this.response=res;
    // display order id and phone and address 1 w 2
    console.log(this.response.data);
    for (let j = 0; j < this.response.data.length; j++) {
      for (let i = 0; i < this.orderDetail.length;i++) {

        this.myobj=this.orderDetail[i].order;
     console.log( this.myobj.id);

        console.log(this.response.data[j].order_id);
        if(this.myobj.id ==this.response.data[j].order_id){
          this.phones.push(this.response.data[j].phone);
          this.addresses.push(this.response.data[j].address);
      }
      }


    }
    console.log(this.phones);
    console.log(this.addresses);


  }

)
// console.log(this.food);

// console.log(this.order);

      },
    )

  }
}