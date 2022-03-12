import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AllProductResponse, Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  p: any;
  productArr!: Product[];
  searchInput:any;

  @Output()
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService, private route: ActivatedRoute, private auth: AuthenticationService) {
  };

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res) => {
        console.log(res)
        this.productArr = res.data
      });
    this.route.params.subscribe(params => {
      if (params['categoryId']) {
        this.productService.getAllProducts().subscribe((res) => {
          console.log(res.data, 'my proooooddddddddduuuuuuctsssss')

          this.productArr = res.data.filter(prod => prod.category_id == params['categoryId'])
          console.log(this.productArr);

        });
      }

    })

  }

}
