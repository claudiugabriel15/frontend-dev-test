import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'stub';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  showSpinner = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.authService.logout();
      this.showSpinner = false;
      this.router.navigateByUrl('auth/login');
    }, 1500);
  }

}
