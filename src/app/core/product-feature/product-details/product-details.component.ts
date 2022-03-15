import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product= {} as Product;
  relatedProducts!: Product[];
  pro:any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    // this.getProductById(i);
    this.getRelatedProduct();
  }

  // getProductById(){
    
  //   this.activatedRoute.params.subscribe(
  //     (params)=>{
  //       const id = +params['productId'];
  //       console.log (id)
        
  //     },
  //     (err)=>{},
  //     ()=>{},
  //   )
  // }
  getProductById(id:number){
    console.log(id)
    this.productService.getProductById(id).subscribe((res)=>{
      this.pro =res.data;
      console.log(this.pro)
    })
  }


  calculatePrice():number{
    let result;
    if(this.product.discount){
      result = this.product.price - this.product.discount;
    }
    else{
      result = this.product.price
    }
    return result;
  }

  getRelatedProduct(){
    // this.relatedProducts = this.productService.getAllProducts().slice(0,4);
  }

}
