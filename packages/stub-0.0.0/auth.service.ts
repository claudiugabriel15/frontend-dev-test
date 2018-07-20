import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from './models/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    private loginURL = 'https://dev-test-service.madebywiser.com/login';
    private tokenValidityURL = 'https://dev-test-service.madebywiser.com/me';

    public profile$: Subject<Account> = new BehaviorSubject<Account>(undefined);

    constructor(private http: HttpClient) { }

    private getAuthHeader(userData: any) {
      const authorization = btoa(`${userData.username}:${userData.password}`);

      const headers = new HttpHeaders(
        { 'Authorization': `Basic ${authorization}` }
      );

      return headers;
    }

    private getJwthHeader(token: string) {
      const headers = new HttpHeaders(
        { 'Authorization': `${token}` }
      );

      return headers;
    }

    private saveToken(token: string): void {
      if (token) {
        localStorage.setItem('token', token);
      }
    }

    private getToken(): string {
      return localStorage.getItem('token');
    }

    private removeToken(): void {
      localStorage.removeItem('token');
    }

    public login(userData: any): Observable<string> {
      const headers = this.getAuthHeader(userData);

      return this.http.get(this.loginURL, { 'headers': headers, responseType: 'text' }).map(
        (token) => {
          this.saveToken(token);
          return token;
        },
        (error) => {
          return error;
        }
      );
    }

    public logout(): void {
      this.removeToken();
      this.profile$.next(undefined);
    }

    public checkTokenValidity(): Promise<boolean> {
      const storedToken = this.getToken();

      if (storedToken) {
        const headers = this.getJwthHeader(storedToken);

        return this.http.get(this.tokenValidityURL, { 'headers': headers, responseType: 'text' }).map(
          (response) => {
            this.profile$.next(JSON.parse(response));
            return true;
          },
          (error) => {
            this.profile$.next(undefined);
            return false;
          }).toPromise();
      } else {
        this.profile$.next(undefined);
        return Promise.reject(false);
      }
    }

}
