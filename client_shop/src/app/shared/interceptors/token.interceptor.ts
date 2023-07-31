import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor( private auth: AuthService, private router: Router ) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if ( this.auth.isAuthenticated() ) {
      req = req.clone( {
        headers: req.headers.set( 'Authorization', this.auth.getToken() ?? '' )
      } );
    }
    return next.handle( req ).pipe(
      catchError( ( error: HttpErrorResponse ) => {
        return this.handleError( error );
      } )
    )
  }

  private handleError( error: HttpErrorResponse ): Observable<any> {
    // check session token
    if ( error.status === 401 ) {
      this.router.navigate( ['/login'], {
        queryParams: {
          sessionExpired: true
        }
      } );
    }
    return throwError( () => error );
  }
}
