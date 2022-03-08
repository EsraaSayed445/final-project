import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errors = {
    name:null,
    email:null,
    password:null,
  }

  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;

    // console.log(form.value);

    this.auth.register(name,email,password,password_confirmation).subscribe((res:any)=>{
    // console.log(res);

    // redirection
       this.router.navigate(['/login']);
    },
    (err:any)=>{
      this.errors = err.error.errors;
      // console.log(err.error.errors);
    })
  }
}
