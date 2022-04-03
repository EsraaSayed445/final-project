import { Component, OnInit } from '@angular/core';
import { Food_Order } from 'src/app/_models/product/food_order.model';
import { Order } from 'src/app/_models/product/order.model';
import { AllProductResponse, Product } from 'src/app/_models/product/product.model';
import { OrderService } from 'src/app/_services/product/order.service';
import { ProductService } from 'src/app/_services/product/product.service';

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
  constructor(private _OrderService: OrderService , private _ProductService: ProductService) { }

  ngOnInit(): void {
    this._OrderService.getAllFoodsOrders().subscribe(
      (res)=>{
         this.orderDetail=res.data;
         for (let i = 0; i < this.orderDetail.length; i++) {
          this.food.push(this.orderDetail[i].food);
          this.order.push(this.orderDetail[i].order);

        }

console.log(this.food);

console.log(this.order);

      },
    )

  }
}
