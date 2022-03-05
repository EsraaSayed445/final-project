import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import {AllProductResponse, Product} from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { AuthService }from 'src/app/_services/auth.service';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {







  p:any;
  productArray!: Product[];


  constructor(private productService: ProductService ,private auth:AuthService) {
  };

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productArray=res.data;
        console.log( this.productArray);
      },
      (err)=>{},
      ()=>{}
    );
  }

  @Output()
  itemAdded: EventEmitter<Product>= new EventEmitter<Product>();

  // onItemAddedToCart(product : Product){

  //   console.log(product);
  //   this.itemAdded.emit(product);

  //   this.productService.addProductToCart(product)
  // }

}
