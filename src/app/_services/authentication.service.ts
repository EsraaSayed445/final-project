import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  // errorMessage: any;

  constructor(private http: HttpClient) { }

  // Toogle Loggedin
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

    // Status
    status() {
      const localData: any = localStorage.getItem('user');
      if (!localData) {
        this.isLoggedIn.next(false);
         console.log('User not logged in !!');
      } else {
        const userObj = JSON.parse(localData);
        const token_expires_at = new Date(userObj.token_expires_at);
        const current_date = new Date();
        if (token_expires_at > current_date) {
          this.isLoggedIn.next(true);
        } else {
          this.isLoggedIn.next(false);
           console.log('Token Expires!!');
        }
      }
      return this.isLoggedIn.asObservable();
    }

   // Login
   login(email: string, password: string) {
    return this.http.post(environment.baseUrl+'login', {
      email: email,
      password: password,
    });
  }

  // User Info
  user() {
    const user: any = localStorage.getItem('user');
    const userObj: any = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(environment.baseUrl+'user', {
      headers: headers});
  }

  // Logout
  logout(allDevice: boolean){
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(environment.baseUrl+'logout', {allDevice:allDevice}, {headers:headers});
  }

   // Register
   register(name:string, email:string, password:string, password_confirmation:string){
    const data={
      name:name,
      email:email,
      password:password,
      password_confirmation:password_confirmation,
    }
    // console.log(data);
    return this.http.post(environment.baseUrl+'register', data);
  }

}
