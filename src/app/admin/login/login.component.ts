import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, 
    private auth:AuthenticationService,
    private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // const email = form.value.email;
    // const password = form.value.password;

    // // console.log(email, password);
    // this.auth.login(email, password).subscribe((res:any)=>{
    //   // console.log(res);
    //   localStorage.setItem('user', JSON.stringify(res))

    //   // redirect to dashboard
    //   this.router.navigate(['/dashboard']);
    // },
    // err=>{
    //   console.log(err);
    // })

    this.authService.login(form.value).subscribe(
      (res)=>{console.log(res)
      sessionStorage.setItem('token',res.token)},
      (err)=>{},
      ()=>{}

    )

  }
}