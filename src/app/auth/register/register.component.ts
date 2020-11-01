import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userType = 'male';
  materials = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getMaterial();
  }

  buildForm() {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      adhaar: [null, Validators.required],
      userType: ['farmer', Validators.required],
      material: ['select material', Validators.required]
    })
  }

  getMaterial() {
    this.authService.getMaterial().subscribe((res: any) => {

    }, (error) => {

    });
  }

}
