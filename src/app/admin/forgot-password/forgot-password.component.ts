import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  error={
    email:null
  };
  message:any;
  wait:boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.wait = true;
    const email = form.value.email;
    // console.log(email);
    this.auth.forgot(email).subscribe((res:any)=>{
      console.log(res);
      this.message = res.message;
      this.wait = false;
    }, (err)=>{
      // console.log(err.error.errors);

     this.error = err.error.errors;
     this.wait = false;
    })
  }

}
