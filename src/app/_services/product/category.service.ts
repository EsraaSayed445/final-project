import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categoryArray: Category[]=[
    {id:1, name:'food'},
    {id:2, name:'electrical'},
    {id:3, name:'books'},
    {id:4, name:'baby'},
    {id:5, name:'clothes'},
    {id:6, name:'sports'},
    {id:7, name:'healthy'}
  ];
  
  getAllCategories():Category[]{
    return this.categoryArray;
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}

}
