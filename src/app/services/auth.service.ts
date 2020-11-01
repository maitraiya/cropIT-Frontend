import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(body) {
    return this.http.post('http://localhost:3000/api/login', body);
  }

  public signup(): void {
    
  }

  public getMaterial() {
    return this.http.get('http://localhost:3000/api/material')
  }
}
