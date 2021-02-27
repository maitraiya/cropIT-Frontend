import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {

  constructor(
    private farmerService: FarmerService
  ) { }

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals() {
    this.farmerService.getDeals().subscribe((res: any) => { 

    })
  }

}
