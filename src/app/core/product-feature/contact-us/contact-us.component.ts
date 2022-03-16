import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/_services/product/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactService:ContactService, private router: Router) { }

  ngOnInit(): void {
  }


  onAddFeedback(feedback:any) {
        console.log(feedback);
        console.log("added feedback");
       this.contactService.addContact(feedback);  
       window.alert("thanks for your message"); 
       this.router.navigateByUrl('/product/listing');
      
 }


}
