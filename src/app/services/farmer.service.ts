import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http: HttpService) { }

  getFarmers() {
    return this.http.get('/farmer');
  }

  getMachines() {
    return this.http.get('/machine');
  }

  getMyRentedMachines() {
    return this.http.get('/machine');
  }
}
