import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  machines = [];

  constructor(private farmerService: FarmerService) {}

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines() {
    this.farmerService.getMyRentedMachines().subscribe((res: any) => {
      console.log('res', res);
      this.machines = res;

      this.machines.forEach((o: any) => {
        const date1: any = new Date(o.fromDate);
        const date2: any = new Date(o.toDate);
        const diffTime = Math.abs(date2 - date1);
        o.days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      });
    });
  }
}
