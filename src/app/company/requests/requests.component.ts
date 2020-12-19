import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  expiredPosts = [];

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.companyService.getExpiredPosts().subscribe((res: any) => {
      this.expiredPosts = res;
    });
  }

}
