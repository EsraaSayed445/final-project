import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/product/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  addcategory:any

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  addCategory(){
    
    this.categoryService.addCategory(this.addcategory);
  }
}
