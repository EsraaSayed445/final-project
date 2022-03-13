import { Component, OnInit } from '@angular/core';
import { Food_Order } from 'src/app/_models/product/food_order.model';
import { Product } from 'src/app/_models/product/product.model';
import { OrderService } from 'src/app/_services/product/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderDetail:Food_Order[]=[];
  constructor(private _OrderService: OrderService) { }

  ngOnInit(): void {
    this._OrderService.getAllProducts().subscribe(
      (res)=>{
        this.orderDetail.push(res);
        console.log("hellooooooo");
        
        console.log(this.orderDetail[0])
        
      },
      (err)=>{
        console.log(err);
        
      },
      ()=>{}
    )

  }

}
