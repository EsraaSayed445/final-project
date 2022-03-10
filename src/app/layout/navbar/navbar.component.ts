import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import{ ProductService} from 'src/app/_services/product/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;

addedProducts :Product[]=[];
dropdownOpened= false
myproduct!:Product

  // for modal
  display = "none";

  checkbox:boolean = false;


// onItemAdded(product:Product){
//   console.log(product)
//   this.addedProducts.push(product);}

  constructor(private productService: ProductService, private auth:AuthenticationService, private router:Router) {
   }

  ngOnInit(): void {

    this.auth.status().subscribe((res) => {
      this.loggedIn = res;
      // console.log('navbar:' + this.loggedIn);
    }, (err) => {
      console.log(err);
    })

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
if( myproduct.cartCounter>1)
{
  myproduct.cartCounter--;
}
else if(myproduct.cartCounter==1)
{
  myproduct.cartCounter--;
  this.addedProducts.splice(this.addedProducts.indexOf(myproduct), 1);
}

}

// modal for add product
openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}

logout(){
  // console.log(this.checkbox);
  this.auth.logout(this.checkbox).subscribe((res)=>{
    console.log(res);
    localStorage.removeItem('user');

    this.auth.toggleLogin(false);

    // Redirect
        this.display = "none";
this.router.navigate(['/login']);

  }, (err) =>{
    console.log(err)
  })
}

}
