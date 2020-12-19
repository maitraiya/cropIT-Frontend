import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  machines = [];

  constructor(
    private farmerService: FarmerService
  ) { }

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines() {
    this.farmerService.getMachines().subscribe((res: any) => {
      this.machines = res;
    })
  }

}
