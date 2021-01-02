import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = [];
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getPosts() {
    this.companyService.getPosts().subscribe((res: any) => {
      this.posts = res;
    })
  }

  acceptDeal(post) { 

  }

}
