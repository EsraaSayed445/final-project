import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
foods:Product[]=[];
totalPrice:number=0;
addProduct:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

   for(var i=0; i< (this.productService.getproductsfromcart()).length ;i++){
     this.foods.push(this.productService.getproductsfromcart()[i]);
   }
   console.log(this.foods);
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

   onAddProduct(product: any) {
    this.addProduct = product;

   this.productService.addProduct(this.addProduct);
    console.log( this.addProduct);
    console.log("added order")
 //  this.router.navigateByUrl('/product/listing');
 }

}
