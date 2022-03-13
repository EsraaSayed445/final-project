import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/product/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }


  onAddFeedback(feedback:any) {
        console.log(feedback);
        console.log("added feedback");
       this.contactService.addContact(feedback);   
 }



}
