import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from 'stub';

import {
  LoginComponent,
  LogoutComponent,
  LoginFormComponent,
  SpinnerComponent,
} from './index';

const AUTH_ROUTES = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ],
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(
      AUTH_ROUTES
    ),
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    LoginFormComponent,
    SpinnerComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
