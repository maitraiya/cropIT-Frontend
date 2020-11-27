import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  options = {
    headers: new HttpHeaders()
      .set('cropit-auth-token', localStorage.getItem('cropit-auth-token'))
  }

  constructor(
    private http: HttpClient
  ) { }

  getCompanies() {
    return this.http.get('http://localhost:3000/api/company/', this.options);
  }
}
