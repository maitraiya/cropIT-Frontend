import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css'],
})
export class SendMailComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  forgotPassword() {
    this.auth.sendMail(this.forgotPasswordForm.value.email).subscribe(
      (result: any) => {
        this.toastr.success(result.message);
      },
      (err: any) => {
        this.toastr.error(err.error);
      }
    );
  }
}
