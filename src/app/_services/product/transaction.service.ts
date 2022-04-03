import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { allTransactionResponse, Transaction } from 'src/app/_models/product/transaction.model';

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


}
