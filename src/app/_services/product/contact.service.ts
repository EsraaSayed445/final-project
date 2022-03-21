import { Injectable } from '@angular/core';
import { allContactResponse, Contact } from 'src/app/_models/product/contact.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  errorMessage: any;

  constructor(private _httpClient:HttpClient) { }


  getAllContacts():Observable<allContactResponse>{
    return this._httpClient.get<allContactResponse>(environment.baseUrl + 'contacts')
  }
 

  addContact(contact: Contact) {
    // this.productsArray.push(product);
    const body = contact;
    console.log(body);
    return this._httpClient.post<any>(environment.baseUrl + 'contacts',body).subscribe({
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error in contacts!', error);
      }
  })
   }




}
