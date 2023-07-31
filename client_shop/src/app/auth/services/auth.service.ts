import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment.local';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../intefaces/user.interface';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {
  public url = environment.API_URL;

  constructor( private http: HttpClient ) {

  }

  public login( user: User ): Observable<string> {
    return this.http.post<string>( `${this.url}/api/auth/login`, user );
  }
}
