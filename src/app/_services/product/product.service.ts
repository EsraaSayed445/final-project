import { EventEmitter, Injectable } from "@angular/core";
import { AllProductResponse, Product} from "src/app/_models/product/product.model";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsArray: Product[] = [
    // {
    //   id: 1,
    //   data: [{ name: 'coca-cola', description: 'test', lang: { name: 'en' } }],
    //   category: {id:3, name: 'books' },
    //   tags: [{id:3, name: 'books' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 100,
    //   discount: 20,
    //   imgUrl: 'https://picsum.photos/200/300',
    // },
    // {
    //   id: 2,
    //   data: [{ name: 'camera', description: 'test', lang: { name: 'en' } }],
    //   category: { id:1, name: 'food' },
    //   tags: [{ id:1, name: 'food' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 100,
    //   discount: 10,
    //   imgUrl: 'https://picsum.photos/200/301',
    // },
    // {
    //   id: 3,
    //   data: [{ name: 'laptop', description: 'test', lang: { name: 'en' } }],
    //   category:{id:3, name: 'books' },
    //   tags: [{id:3, name: 'books' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 1000,
    //   imgUrl: 'https://picsum.photos/200/302',
    // },
    // {
    //   id: 4,
    //   data: [{ name: 'pc', description: 'test', lang: { name: 'en' } }],
    //   category: {id: 1, name: 'food' },
    //   tags: [{id:1, name: 'food' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 2000,
    //   discount: 10,
    //   imgUrl: 'https://picsum.photos/200/303',
    // },
    // {
    //   id: 5,
    //   data: [{ name: 'mobile', description: 'test', lang: { name: 'en' } }],
    //   category: {id:3, name: 'books' },
    //   tags: [{id:3, name: 'books' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 3000,
    //   imgUrl: 'https://picsum.photos/200/304',
    // },
    // {
    //   id: 6,
    //   data: [
    //     { name: 'photo-camera', description: 'test', lang: { name: 'en' } },
    //   ],
    //   category: {id:3, name: 'books' },
    //   tags: [{id:3, name: 'books' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 4000,
    //   discount: 10,
    //   imgUrl: 'https://picsum.photos/200/305',
    // },
    // {
    //   id: 7,
    //   data: [{ name: 'tv', description: 'test', lang: { name: 'en' } }],
    //   category: { id:1, name: 'food' },
    //   tags: [{id:1, name: 'food' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 500,
    //   imgUrl: 'https://picsum.photos/200/306',
    // },
    // {
    //   id: 8,
    //   data: [{ name: 'fridge', description: 'test', lang: { name: 'en' } }],
    //   category: {id:3, name: 'books' },
    //   tags: [{id:3, name: 'books' }],
    //   paymentTypes: [{ name: 'CDO' }],
    //   price: 6000,
    //   discount: 100,
    //   imgUrl: 'https://picsum.photos/200/307',
    // },
  ];

  cartHasBeenChanged: EventEmitter<Product[]> = new EventEmitter<
    Product[]
  >();



  private cartArray: Product[] = [];
  errorMessage: any;

  constructor(private httpClient: HttpClient) {}

  getAllProducts():Observable<AllProductResponse>{
    return this.httpClient.get<AllProductResponse>(environment.baseUrl + 'foods')
  }
  getProductById(id: number) {
    // const url = `${environment.baseUrl}/${id}`;
    // return this.productsArray.find((product) => product.id === id);
    return this.httpClient.get(environment.baseUrl +'foods/'+id)
  }

  addProduct(product: Product) {
    // this.productsArray.push(product);
    const body = product;
    console.log(body);
    return this.httpClient.post<any>(environment.baseUrl + 'foods',body).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
   }

  updateProduct() {}

  deleteProduct(id:number){
    const deleteElement = id-1;
    // return this.productsArray.splice(deleteElement,1)
    return this.httpClient.delete(environment.baseUrl +'foods/'+id) 
  }

  addProductToCart(product: Product) {
    console.log(product);

    var found =  this.cartArray.find(function (element) {
      return element.id == product.id ;
  });

  if(!found){
     this.cartArray.push(product);
    this.cartHasBeenChanged.emit(this.cartArray)
    product.cartCounter++;
    console.log(product.cartCounter);
  }
else{
for(var i =0; i<this.cartArray.length;i++){
  if(  this.cartArray[i].id==product.id )
  product.cartCounter++;
  console.log(product.cartCounter);
  }
}


  }

  getproductsfromcart():Product[]{
return this.cartArray;

  }


}
