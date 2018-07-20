import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'stub';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginFailed = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login(userData: any) {
    this.loginFailed = false;

    this.authService.login(userData).toPromise().then(
      (response) => {
        this.router.navigateByUrl('secure');
      },
      (error) => {
        this.loginFailed = true;
      }
    );
  }
}
