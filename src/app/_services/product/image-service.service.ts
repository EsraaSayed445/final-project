import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) { }
  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);
  
    return this.http.post<any>(environment.baseUrl + 'foods',formData);
    // return this.http.post('/api/v1/image-uploa', formData);
  }
}
