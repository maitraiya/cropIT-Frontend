import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerComponent } from './farmer.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RentComponent } from './rent/rent.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
  {
    path: '', component: FarmerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'rent', component: RentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
