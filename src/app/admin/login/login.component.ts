import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors = {
    email: null,
    password: null,
  }

  constructor(private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    // // console.log(email, password);
    this.auth.login(email, password).subscribe((res: any) => {
      // console.log(res);
      const result = res;
      localStorage.setItem('user', JSON.stringify(result))

      //   // redirect to dashboard
      this.router.navigate(['/home'])
        .then(() => {
          window.location.reload();

        })},
          (err: any) => {
            this.errors = err.error.errors;
            // console.log(err.error.errors);
          })

    }
}