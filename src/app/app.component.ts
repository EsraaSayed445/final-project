import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';
import { AuthService }from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private auth: AuthService){}
  // addedProduct:ProductWithCounter[]=[];
  // counter=1;

  // onItemAdded(product:Product ){

  // }
  ngOnInit(){
   
  }
}
