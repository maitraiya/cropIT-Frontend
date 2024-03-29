import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyService } from 'src/app/services/company.service';
import * as _ from 'lodash';
import { FarmerService } from 'src/app/services/farmer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts = [];
  displayPosts = [];
  modalRef: BsModalRef;
  predictedPrice;
  price;
  constructor(
    private modalService: BsModalService,
    private companyService: CompanyService,
    private farmerService: FarmerService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getPosts() {
    this.companyService.getPosts().subscribe(
      (res: any) => {
        this.posts = this.getFuturePosts(_.flatten(res));
        this.displayPosts = this.posts;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getFuturePosts(posts: any[]): any[] {
    return posts.filter((o) => {
      if (new Date(o.expiryDate) > new Date()) {
        return o;
      }
    });
  }

  acceptDeal(post) {
    const data = {
      posting: post._id,
      addedBy: post.addedBy,
      acceptedBy: localStorage.getItem('userId'),
    };
    this.farmerService.acceptDeal(data).subscribe(
      (res: any) => {
        console.log('res', res);
        this.toastrService.success('Deal added successfully');
      },
      (err) => {
        console.log('err', err);
        this.toastrService.error('Something went wrong');
      }
    );
  }

  getPrice(post) {
    return this.farmerService.pricePredictor(post.id).subscribe((price) => {
      console.log('price', price);
      post.price = price;
    });
  }

  search(value) {
    this.displayPosts = this.posts.filter((o) => {
      if (o?.company?.user?.name.includes([value])) {
        return o;
      }
    });
  }
}
