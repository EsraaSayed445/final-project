import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product/product.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { rating } from '../_models/product/rating.model';
import { User } from '../_models/product/user.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  errorMessage: any;
  user: any;
  food: any;

  constructor(private httpClient: HttpClient, private _auth: AuthenticationService) { }

  addRating(rating: rating) {
    this._auth.user().subscribe(
      (res) => {
        this.user = res;
        console.log(this.user.id);

        const body = { user_id: this.user.id, rating: rating };
        // const body = {rating: rating };
        console.log(body);
      // });
    return this.httpClient.post<any>(environment.baseUrl + 'rating', body).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('rating error', error);
      }
    })
  });

  }
}
