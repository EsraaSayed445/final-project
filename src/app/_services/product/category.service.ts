import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // constructor() { }

  categoryArray: Category[]=[
    // {id:1, name:'Offer'},
    // {id:2, name:'Beaf Sandwich'},
    // {id:3, name:'Chicken Sandwich'},
    // {id:4, name:'Pizza'},
    // {id:5, name:'Coffee'},
    // {id:6, name:'Natural Juices'},
    // {id:7, name:'Desserts'},
    // {id:8, name:'Bakery'},
    // {id:9, name:'Extra'}
  ];

  // getAllCategories():Category[]{
  //   return this.categoryArray;
  // }
  getById(){}
  add(){}
  edit(){}
  delete(){}

  constructor(private httpClient: HttpClient) { }



  getAllCategories():Observable<Category[]>
  {//return this.categoryArray
    console.log(this.httpClient.get<Category[]>(environment.baseUrl + 'categories'))
    return this.httpClient.get<Category[]>(environment.baseUrl + 'categories');
  }

}
