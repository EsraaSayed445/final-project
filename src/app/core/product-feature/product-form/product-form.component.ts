import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/product/category.model';
import { PaymentType } from 'src/app/_models/product/payment-type.model';
import { Product } from 'src/app/_models/product/product.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { ImageServiceService } from 'src/app/_services/product/image-service.service';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TagService } from 'src/app/_services/product/tag.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  paymentTypes!: PaymentType[];
  tagArray:Tag[] = [];
  categoryArray!: Category[];
  product= {} as Product;
  editMode=false;
  addProduct!: Product;
  selectedFile!: ImageSnippet;


  constructor(
    private productService: ProductService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private paymentTypeService: PaymentTypeService,
    private categoryService: CategoryService ,
    private tagService: TagService,
    private imageService: ImageServiceService,
    
    ) { }

    processFile(imageInput: any) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();
  
      reader.addEventListener('load', (event: any) => {
  
        this.selectedFile = new ImageSnippet(event.target.result, file);
  
        this.imageService.uploadImage(this.selectedFile.file).subscribe(
          (res) => {
            console.log("weeeeeeeeeee");
            
            return "done";
          },
          (err) => {
          
          })
      });
  
      reader.readAsDataURL(file);
    }

  ngOnInit(): void {
    this.getAllProductTypes();
    this.getAllCategories();
    this.getAllTags();

    if(this.activatedRoute.snapshot.url[0].path=='edit'){
      this.editMode=true;
    }
    
    if(this.editMode){
      this.getProductById();
    }
  }
  getAllProductTypes() {
    this.paymentTypes = this.paymentTypeService.getAllPaymentTypes();
  }

  getAllCategories(){
    this.categoryArray = this.categoryService.getAllCategories();
  }
  getAllTags(){
    this.tagArray = this.tagService.getAllTags();
  }
  onCheckBoxChanged(index:number){
    if(this.product.paymentTypes){ 
      this.product.paymentTypes=[
        ...this.product.paymentTypes,
        this.paymentTypes[index]
      ];
    }
    else{
      this.product.paymentTypes=[this.paymentTypes[index]]
    }

    console.log(this.product)
  }

  addtag(){
   this.tagService.addTag();
  }

  // image

  // onFileChange(event: any): void {
  //   this.product.imagepath = event;
  // }

  // onSelect(event: any){
  //   if(event.target.files){
  //     var reader= new FileReader()
  //     reader.readAsDataURL(event.target.files[0])
  //     reader.onload= (event: any)=>{
  //       this.product.imagepath= event.target.result
  //     }
  //   }
  // }


  onAddProduct(form: NgForm) {
    this.addProduct = form.value;
    
    this.productService.addProduct(this.addProduct);
    console.log(this.product);
    this.router.navigateByUrl('home');
  }

  getProductById(){
    const id = +this.activatedRoute.snapshot.params['productId'];
    this.productService.getProductById(id)!;
  }

}
