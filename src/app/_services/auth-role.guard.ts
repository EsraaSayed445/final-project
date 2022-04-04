import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthRoleGuard implements CanActivate {
  user: any = localStorage.getItem('user');
  userObj: any = JSON.parse(this.user);

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthorized = this.userObj.user.role.includes(route.data['role']);

    if (!isAuthorized) {
      this.router.navigate(['/product/listing']);
      // window.alert('you are not authorized');
    }

    return isAuthorized || false;
  }
}
