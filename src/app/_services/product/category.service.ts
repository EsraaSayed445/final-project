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
  errorMessage: any;

  // getAllCategories():Category[]{
  //   return this.categoryArray;
  // }
  getCategoryById(id:number):Observable<any>{
    return this.httpClient.get<any>(environment.baseUrl + 'categories/'+id);
  }

  addCategory(name:any){
 // this.productsArray.push(product);
    const body = name;
    console.log(body);
    return this.httpClient.post<any>(environment.baseUrl + 'categories', body).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
  })
  }

  updateCategory(id:number,category:any){
    const body = category;
    console.log(body);
    return this.httpClient.post<any>(environment.baseUrl +'categories/'+id,body).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
  }

   deleteCategory(id:number){
    console.log(id);
    
    return this.httpClient.delete(environment.baseUrl +'categories/'+id).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })

}

  constructor(private httpClient: HttpClient) { }



  getAllCategories():Observable<Category[]>
  {//return this.categoryArray
    console.log(this.httpClient.get<Category[]>(environment.baseUrl + 'categories'))
    return this.httpClient.get<Category[]>(environment.baseUrl + 'categories');
  }

}
