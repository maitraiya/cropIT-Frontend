import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  private getOptions() {
    return {
      headers: new HttpHeaders()
        .set('cropit-auth-token', localStorage.getItem('cropit-auth-token'))
    };
  }

  public get(url) {
    return this.http.get(this.api + url, this.getOptions());
  }

  public post(url, body) {
    return this.http.post(this.api + url, body, this.getOptions());
  }

  public put(url, body) {
    return this.http.put(this.api + url, body, this.getOptions());
  }

  public delete(url) {
    return this.http.delete(this.api + url, this.getOptions());
  }
}
