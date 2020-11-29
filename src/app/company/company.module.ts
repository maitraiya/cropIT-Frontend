import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyProfileEditComponent } from './company-profile-edit/company-profile-edit.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { RequestsComponent } from './requests/requests.component';
import { OrdersComponent } from './orders/orders.component';
import { TransportComponent } from './transport/transport.component';


@NgModule({
  declarations: [CompanyComponent, CompanyProfileComponent, CompanyProfileEditComponent, CompanyDashboardComponent, RequestsComponent, OrdersComponent, TransportComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
