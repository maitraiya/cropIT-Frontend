import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(
    private farmerService: FarmerService
  ) { }

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals() {
    this.farmerService.getDeals().subscribe((res: any) => { 
      console.log('res', res)

    })
  }

}
