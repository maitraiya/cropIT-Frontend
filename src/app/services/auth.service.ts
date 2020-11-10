import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(body) {
    return this.http.post('http://localhost:3000/api/login', body);
  }

  public signUp(body) {
    return this.http.post('http://localhost:3000/api/signup', body);
  }

  public getMaterial() {
    return this.http.get('http://localhost:3000/api/material');
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
