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

  getPosts() {
    return this.http.get('/posting');
  }

  getExpiredPosts() {
    return this.http.get('/posting');
  }

  createPost(body) {
    return this.http.post('/posting', body);
  }
}
