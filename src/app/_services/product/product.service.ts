import { EventEmitter, Injectable } from "@angular/core";
import { AllProductResponse, Product } from "src/app/_models/product/product.model";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  productsArray: Product[] = [];

  cartHasBeenChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  private cartArray: Product[] = [];
  errorMessage: any;

  constructor(private httpClient: HttpClient) { }
  getAllProducts(): Observable<AllProductResponse> {
    return this.httpClient.get<AllProductResponse>(environment.baseUrl + 'foods')
  }
  getProductById(id: number):Observable<AllProductResponse>{
    // const url = `${environment.baseUrl}/${id}`;
    // return this.productsArray.find((product) => product.id === id);
    return this.httpClient.get<AllProductResponse>(environment.baseUrl +'foods/'+id)
  }

  addProduct(product: Product) {
    // this.productsArray.push(product);
    const body = product;
    console.log(body);
    return this.httpClient.post<any>(environment.baseUrl + 'foods', body).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
  })
   }

  updateProduct(id: number,product:Product){
    const body = product;
    console.log(body);
    console.log(id);
    return this.httpClient.post<any>(environment.baseUrl +'foods/'+id,body).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
  }

  deleteProduct(id:number){
    console.log(id);
    // return this.productsArray.splice(deleteElement,1)
    return this.httpClient.delete(environment.baseUrl +'foods/'+id).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })

}
  addProductToCart(product: Product) {
    console.log(product);
    var found = this.cartArray.find(function (element) {
      return element.id == product.id;
    });

    if (!found) {
      this.cartArray.push(product);
      this.cartHasBeenChanged.emit(this.cartArray)
      product.cartCounter++;
      console.log(product.cartCounter);
    }
    else {
      for (var i = 0; i < this.cartArray.length; i++) {
        if (this.cartArray[i].id == product.id)
          product.cartCounter++;
        console.log(product.cartCounter);
      }
    }
  }
  getproductsfromcart(): Product[] { return this.cartArray; }


}
