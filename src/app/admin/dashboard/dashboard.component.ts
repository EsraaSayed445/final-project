import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { AllProductResponse, Product } from 'src/app/_models/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product/product.service';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/_services/product/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private auth: AuthenticationService,
    private http: HttpClient,
    private router: Router) { }

  user: any;
  productArr!: Product[];
  p: any;
  pro: any;
  searchInput: any;
  category: any;
  addProduct:any;

  cat:any[]=[];

  ngOnInit(): void {

    this.getAllProducts();
    this.getAllCategories();

    // Check status
    this.auth.status().subscribe((res) => {
      console.log(res);
    })

    this.auth.user().subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      })

  }


  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (res) => {
        console.log(res)
        this.productArr = res.data
      });
  }

  getProductById(id: number) {
    console.log(id)
    this.productService.getProductById(id).subscribe((res) => {
      this.pro = res.data;

    this.getCategoryById(this.pro.category_id)
    })
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      console.log(res)
      this.category= res
      
    })
  }

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe((res) => {
      this.cat= res.name;
    })
  }

  // image
  onSelect(event: any) {
    if (event.target.files) {
      var reader = new FileReader()
      console.log(reader);
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.pro.imagepath = event.target.result
      }
    }
  }


  onSubmit(form: NgForm) {
    console.log(form.value.category_id);
    this.pro.description = form.value.description;
    this.pro.name = form.value.name;
    this.pro.price = form.value.price;
    this.pro.imagepath = form.value.imagepath;
    this.pro.category_id = form.value.category_id[0];
    this.productService.updateProduct(this.pro.id, this.pro);
  }

  onAdd(form: NgForm) {
    console.log(form.value);
    this.addProduct = form.value;
   this.productService.addProduct(this.addProduct);
  }

  redirecttodash() {
    window.location.reload();
  }

  onItemDeleted(id: number) {
    this.productService.deleteProduct(id);
    console.log("delete");
  }

}
