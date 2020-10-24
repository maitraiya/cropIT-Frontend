import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostListComponent } from './post-list/post-list.component';
import { RentComponent } from './rent/rent.component';
import { ToolsComponent } from './tools/tools.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [FarmerComponent, HomeComponent, ProfileComponent, PostListComponent, RentComponent, ToolsComponent, PaymentsComponent],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }
