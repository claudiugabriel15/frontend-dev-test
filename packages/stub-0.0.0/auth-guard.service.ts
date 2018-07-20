import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../node_modules/stub/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    return this.authService.checkTokenValidity().then(
      () => true,
      () => {
        this.router.navigateByUrl('auth/login');
        return false;
      }
    );
  }
}
