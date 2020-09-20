import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterStepOneComponent } from './register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './register-step-two/register-step-two.component';
import { RegisterStepThreeComponent } from './register-step-three/register-step-three.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterStepOneComponent, RegisterStepTwoComponent, RegisterStepThreeComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
