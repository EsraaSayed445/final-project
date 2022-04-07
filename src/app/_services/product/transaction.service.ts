import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/_models/product/transaction.model';
// import { allTransactionResponse, Transaction } from 'src/app/_models/product/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  response:any;
  errorMessage: any;

  constructor(private _httpClient: HttpClient) {

   }

  // getAllTransactionData():Observable<allTransactionResponse>{

  //   var y =this._httpClient.get<allTransactionResponse>(environment.baseUrl + 'pay');
  //   return y;
  // }
  getAllTransactions():Observable<Transaction>{
    console.log( this._httpClient.get<Transaction>(environment.baseUrl + 'pay'));
     return this._httpClient.get<Transaction>(environment.baseUrl + 'pay');
   }
 
   getTranssById(id:number):Observable<any>{
     return this._httpClient.get<any>(environment.baseUrl + 'pay'+id);
   }

  postAllTransactionData(transactionInfo: any) {
    // this.productsArray.push(product);
    const body = transactionInfo;
    console.log(body);
     this._httpClient.post<any>(environment.baseUrl + 'pay',body).subscribe(
  (res)=>{
    console.log(res);
    this.response=res;
 console.log(this.response);
 window.location.href =this.response.InvoiceURL;
//  return this.response;

  });

  }


  getAllTransactions():Observable<Transaction>{
    console.log( this._httpClient.get<Transaction>(environment.baseUrl + 'pay'));
     return this._httpClient.get<Transaction>(environment.baseUrl + 'pay');
   }
 
   getTranssById(id:number):Observable<any>{
     return this._httpClient.get<any>(environment.baseUrl + 'pay'+id);
   }


}
