import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private auth: AuthenticationService){}
  // addedProduct:ProductWithCounter[]=[];
  // counter=1;

  // onItemAdded(product:Product ){

  // }
  ngOnInit(){
   
  }
}
