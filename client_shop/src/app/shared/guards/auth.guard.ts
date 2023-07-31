  import { CanActivateFn, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state, ): Observable<boolean> => {
  if ( inject(AuthService).isAuthenticated() ) {
    return of( true );
  }
  inject(Router).navigate( ['/'], {
    queryParams: {
      accessDenied: true
    }
  } );
  return of( false );
}
