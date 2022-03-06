import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';
import { Product } from 'src/app/_models/product/product.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TagService } from 'src/app/_services/product/tag.service';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  selector: 'app-product-filtering',
  templateUrl: './product-filtering.component.html',
  styleUrls: ['./product-filtering.component.scss']
})
export class ProductFilteringComponent implements OnInit {

  categoryList:Category[]=[];
  tagArray:Tag[] = [];
  filterdedProducts!: Product[];

  constructor(
    private category:CategoryService,
    private tagService: TagService,
    private productService:ProductService,
    private route:ActivatedRoute ,
    private router:Router
    ) {

  }

  ngOnInit(): void {
    // this.getAllCategories();
    this.getAllTags();
    this.getFilterCategory;
    this.category.getAllCategories().subscribe((res)=>{
      console.log(res,"categoryyyyyyyyy")
     this.categoryList=res
    });
  }

  // getAllCategories(){
  //   this.categoryArray = this.categoryService.getAllCategories();
  // }

  getAllTags(){
    this.tagArray = this.tagService.getAllTags();
  }

  getFilterCategory(i:number){
    const id= i+1;
    // this.filterdedProducts = this.productService.getAllProducts().filter((ele)=>ele.category.id===id);
    console.log(this.filterdedProducts);
  }

  getFilterTag(x:number){
  const id= x+1;
  // this.filterdedProducts = this.productService.getAllProducts().filter((ele)=>ele.tags[0].id===id);
  console.log(this.filterdedProducts);
}
}
