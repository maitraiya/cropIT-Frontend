import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private active: ActivatedRoute,
    private auth: AuthService
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    localStorage.setItem('cropit-auth-token', this.active.snapshot.params.token);
  }

  forgotPassword() {
    if (
      this.forgotPasswordForm.value.password ==
      this.forgotPasswordForm.value.confirmPassword
    ) {
      this.auth.resetPass(this.forgotPasswordForm.value).subscribe(
        (result: any) => {
          localStorage.clear();
          this.toastr.success(result.message);
          this.router.navigate(['']);
        },
        (err: any) => {
          this.toastr.error(err.error);
        }
      );
    } else {
      this.toastr.error('Passwords do not match');
    }
  }
}
