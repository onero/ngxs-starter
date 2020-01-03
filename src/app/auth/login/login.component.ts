import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Navigate, AppRoutes } from 'src/app/router.state';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get form() { return this.loginForm.controls; }

  async onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // call AuthService...
    setTimeout(() => {
      this.loading = false;
      this.loginForm.reset();
      this.store.dispatch(new Navigate(AppRoutes.HOME));
    },
      2000);
  }
}
