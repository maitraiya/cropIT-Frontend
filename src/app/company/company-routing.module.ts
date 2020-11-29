import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyProfileEditComponent } from './company-profile-edit/company-profile-edit.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyComponent } from './company.component';
import { OrdersComponent } from './orders/orders.component';
import { RequestsComponent } from './requests/requests.component';
import { TransportComponent } from './transport/transport.component';


const routes: Routes = [
  {
    path: '', component: CompanyComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CompanyDashboardComponent },
      { path: 'profile', component: CompanyProfileComponent },
      { path: 'edit', component: CompanyProfileEditComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'transport', component: TransportComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
