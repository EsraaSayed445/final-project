import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/_services/product/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  addcategory:any;
  categoryArr:any;
  category:any;
  searchInput: any;
  c:any;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  addCategory(){
    this.categoryService.addCategory(this.addcategory);
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (res) => {
        this.categoryArr = res
      });
  }
  getCategoryById(id:number){
    this.categoryService.getCategoryById(id).subscribe(
      (res) => {
       console.log(res.id)
       this.category=res
       console.log(this.category)
      });
  }

  onSubmit(form: NgForm) {
    console.log(this.category);
    this.category.name = form.value.name;
    console.log(this.category.name);
    this.categoryService.updateCategory(this.category.id, this.category);
  }

  onAdd(form: NgForm) {
   
    this.category = form.value;
    console.log(this.category);
    this.categoryService.addCategory(this.category);
  }

  redirecttodash() {
    window.location.reload();
  }

  
  onItemDeleted(id: number) {
    this.categoryService.deleteCategory(id);
    console.log("delete");
  }

}
