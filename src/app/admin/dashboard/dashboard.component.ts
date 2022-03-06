import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  user:any;
  ngOnInit(): void {

    // const user:any= localStorage.getItem('user');
    // const userObj= JSON.parse(user);

    // const token= userObj.token;
    // const headers= new HttpHeaders({
    //   authorization: `Bearer ${token}`,
    // });

       // Check status
   this.auth.status().subscribe((res)=>{
    console.log(res);
  })
  
  this.auth.user().subscribe((res)=>{
    this.user = res;
  }, (err) =>{
    console.log(err);
  })
  }

}
