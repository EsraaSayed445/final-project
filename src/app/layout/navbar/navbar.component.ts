import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import{ ProductService} from 'src/app/_services/product/product.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

addedProducts :Product[]=[];
dropdownOpened= false
myproduct!:Product


onItemAdded(product:Product){
  console.log(product)
  this.addedProducts.push(product);}

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productService.cartHasBeenChanged.subscribe(
      (res)=>{
        this.addedProducts=res
      },
      (err)=>{},
      ()=>{}
    )
  }
 // deleted item from cart
 delete(myproduct:Product){
if( myproduct.cartCounter!=0){myproduct.cartCounter--;}
else{
  this.addedProducts.splice(this.addedProducts.indexOf(myproduct), 1);
 //  make it with 0 because when add it to cart start counter again from 0
  // myproduct.cartCounter=0
}
          }
}
