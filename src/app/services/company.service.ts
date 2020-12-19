import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpService
  ) { }

  getCompanies() {
    return this.http.get('/company/')
  }

  getAllDeals() {
    return this.http.get('/deal');
  }
}
