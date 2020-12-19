import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.companyService.getAllDeals().subscribe((res) => { 
      console.log('res', res)

    })
  }

}
