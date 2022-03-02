import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import {AllProductResponse, Product} from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  productArray!: Product[];


  constructor(private productService: ProductService) { 
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
