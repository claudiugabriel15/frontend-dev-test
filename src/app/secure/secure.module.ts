import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentComponent, UserDetailsComponent } from './index';
import { AuthService, AuthGuardService } from 'stub';

const SECURE_ROUTES = [
  {
    path: 'secure',
    component: ContentComponent,
    children: [
      {
        path: 'details/:id',
        component: UserDetailsComponent,
      }
    ],
    canActivate: [ AuthGuardService ]
  },
];

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild(
      SECURE_ROUTES
    ),
  ],
  declarations: [
    ContentComponent,
    UserDetailsComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class SecureModule { }
