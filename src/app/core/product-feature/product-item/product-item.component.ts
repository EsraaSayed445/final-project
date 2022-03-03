import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
    productItem!:Product;

  @Output()
    itemAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor( private  productService:ProductService ) { }

  calculatePrice():number{
    let result;
    if(this.productItem.discount){
      result = this.productItem.price - this.productItem.discount;
    }
    else{
      result = this.productItem.price
    }
    return result;
  }

  ngOnInit(): void {

  }

  onItemAdded(){
    console.log(this.productItem);
    this.productService.addProductToCart(this.productItem)
  }

  onItemDeleted(id:number){
    this.productService.deleteProduct(id);
  }



}
