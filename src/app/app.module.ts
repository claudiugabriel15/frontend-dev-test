import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusModule } from 'http-status-pipe';
import { AuthService } from 'stub';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

import { AuthModule } from './auth/auth.module';
import { SecureModule } from './secure/secure.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
    },
    {
        path: 'secure',
        loadChildren: './secure/secure.module#SecureModule',
    },
    {
        path: 'error/:status_code',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpStatusModule,

        AuthModule,
        SecureModule,
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
