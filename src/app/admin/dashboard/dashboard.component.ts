import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Product } from 'src/app/_models/product/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
              private productService: ProductService, 
              private auth:AuthenticationService, 
              private http: HttpClient) { }

  user:any;
  productArr!: Product[];
  p:any;
  searchInput:any;
  
  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      (res)=>{console.log(res)
      this.productArr=res.data});

       // Check status
   this.auth.status().subscribe((res)=>{
    console.log(res);
  })
  
  this.auth.user().subscribe((res)=>{
    this.user = res;
  }, (err) =>{
    console.log(err);
  })
  }

  onItemDeleted(id:any){
    // this.productService.deleteProduct(id);

    }
}
