import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  posts = [];

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.companyService.getPosts().subscribe((res: any) => {
      this.posts = res;
    });
  }

}
