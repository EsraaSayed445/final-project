import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { User } from 'src/app/_models/product/user.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { RatingService } from 'src/app/_services/rating.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
 myrating = 0;
 userRating!:number;
 user!: User;
 loggedIn:boolean = false;

  @Input()
  productItem!: any;


  @Output()
  itemAddToCart: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private productService: ProductService, private ratingService:RatingService, private auth:AuthenticationService) { }
  pro: any;
  calculatePrice(): number {
    let result;
    if (this.productItem.discount) {
      result = this.productItem.price - this.productItem.discount;
    }
    else {
      result = this.productItem.price
    }
    return result!;
  }

  ngOnInit(): void {
    this.auth.status().subscribe((res) => {
      this.loggedIn = res;
    }, (err) => {
      console.log(err);
    })

  }

  onItemAdded() {
    console.log(this.productItem);
    this.productService.addProductToCart(this.productItem)
  }


  getProductById(id: number) {

    console.log(id)
    this.productService.getProductById(id).subscribe((res) => {
      this.pro = res.data;
      console.log(this.pro)

    })

  }
 
  submit(rating:any){
    this.myrating= this.userRating;
    this.ratingService.addRating(rating);
    console.log(rating, this.productItem.id, this.user);
  }
 
}
