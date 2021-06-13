import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companylist = [];
  displayPosts = [];

  constructor(
    private companyService: CompanyService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(
      (res: any) => {
        this.companylist = res.filter((o) => {
          if (o?.user) {
            return o;
          }
        });
        this.displayPosts = this.companylist;
      },
      (error) => {
        this.toastrService.error(error.error, 'Error while getting companies');
      }
    );
  }

  search(value) {
    this.displayPosts = this.companylist.filter((o) => {
      if (o?.user?.name.includes([value])) {
        return o;
      }
    });
  }
}
