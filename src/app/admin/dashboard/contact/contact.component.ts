import { Component, OnInit } from '@angular/core';
import { allContactResponse, Contact } from 'src/app/_models/product/contact.model';
import { ContactService } from 'src/app/_services/product/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
feedbacks:any;
  constructor(private _contactService :ContactService) { }

  ngOnInit(): void {
    this.getFeedback();
  }
getFeedback(){
this._contactService.getAllContacts().subscribe(
  (res)=>{
    console.log(res);
    this.feedbacks=res;
    console.log(this.feedbacks);
     }
);
}
}
