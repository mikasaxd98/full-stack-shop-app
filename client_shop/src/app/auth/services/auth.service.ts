import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment.local';
import {Observable, tap } from 'rxjs';
import { User } from '../intefaces/user.interface';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {
  private token: string | null = '';
  public url = environment.API_URL;

  constructor( private http: HttpClient ) {

  }

  public login( user: User ): Observable<{token: string }> {
    return this.http.post<{token: string }>( `${this.url}/api/auth/login`, user )
      .pipe(
        tap(({token}) => {
          localStorage.setItem('auth-token', token);
          this.setToken(token);
        })
      );
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>( `${this.url}/api/auth/register`, user )
      .pipe(
        tap(() => {
          localStorage.setItem('auth-token', 'test')
        })
      )
  }

  public getToken(): string | null {
    return this.token;
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public logOut() {
    this.setToken(null);
    localStorage.clear();
  }

  public setToken(token: string | null) {
    this.token = token;
  }


}
