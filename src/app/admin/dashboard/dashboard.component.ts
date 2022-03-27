import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { AllProductResponse, Product } from 'src/app/_models/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product/product.service';
import { environment } from 'src/environments/environment';
import {NgForm} from '@angular/forms';
import { CategoryService } from 'src/app/_services/product/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
     private productService: ProductService,
     private categoryService : CategoryService,
      private auth:AuthenticationService, 
      private http: HttpClient,
      private router: Router) { }

  user:any;
  productArr!: Product[];
  p:any;
  pro:any; 
  searchInput:any;
  category:any;
  myArray:any[]=[];


  
  ngOnInit(): void {

    this.getAllProducts();

       // Check status
    this.auth.status().subscribe((res)=>{
    console.log(res);
  })
  
  this.auth.user().subscribe(
    (res)=>{
    this.user = res;
  },
    (err) =>{
    console.log(err);
  })

  }


  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        console.log(res)
      this.productArr=res.data
     
    });
  }

  getProductById(id:number){
    console.log(id)
    this.productService.getProductById(id).subscribe((res)=>{
      this.pro=res.data;

      this.categoryService.getCategoryById(this.pro.category_id).subscribe((res)=>{
        this.category=res

        console.log(this.pro)
    
      })


    })
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((res)=>{
      console.log(res)
    })
  }

  getCategoryById(id:number){
    this.categoryService.getCategoryById(id).subscribe((res)=>{
      console.log(res)
    })
  }

  onSubmit(form: NgForm) {

    console.log(form.value);
  this.pro.description=form.value.description;
  this.pro.name=form.value.name;
  this.pro.price=form.value.price;
  this.pro.imagepath=form.value.imagepath;
  this.category.name=form.value.category_name;
  this.productService.updateProduct(this.pro.id,this.pro);
  }
  redirecttodash(){
    window.location.reload();
  }

  onItemDeleted(id:number){
    this.productService.deleteProduct(id);
    console.log("delete");
  }

  

}
