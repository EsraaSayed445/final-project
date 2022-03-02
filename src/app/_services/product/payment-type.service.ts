import { Injectable } from '@angular/core';
import { PaymentType } from 'src/app/_models/product/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  constructor() { }

  paymentTypes: PaymentType[]=[
    {id:1, name:'CDO'},
    {id:2, name:'Paypal'},
    {id:3, name:'Visa'},
    {id:4, name:'Credit Card'},
    {id:5, name:'Debit Card'}
  ];
  
  getAllPaymentTypes():PaymentType[]{
    return this.paymentTypes;
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
