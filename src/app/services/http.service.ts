import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api = 'http://localhost:3000/api';

  token = localStorage.getItem('cropit-auth-token');

  options = {
    headers: new HttpHeaders()
      .set('cropit-auth-token', this.token)
  };

  constructor(
    private http: HttpClient
  ) { }

  public get(url) {
    console.log('this.options', this.options)
    return this.http.get(this.api + url, this.options);
  }

  public post(url, body) {
    return this.http.post(this.api + url, body, this.options);
  }

  public put(url, body) {
    return this.http.put(this.api + url, body, this.options);
  }

  public delete(url) {
    return this.http.delete(this.api + url, this.options);
  }
}
