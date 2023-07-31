import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { catchError, of, Subject, takeUntil, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
} )
export class LoginComponent {
  public loginForm: FormGroup;

  public errors: string[] = []

  private destroy$: Subject<any> = new Subject<any>();

  public get email() {
    return this.loginForm.get( 'email' );
  }

  public get password() {
    return this.loginForm.get( 'password' );
  }

  constructor( private authService: AuthService, private router: Router ) {
    this.loginForm = new FormGroup( {
      email: new FormControl( '', Validators.required ),
      password: new FormControl( '', Validators.required ),
    } );
  }

  public submitForm() {
    this.loginForm.markAllAsTouched();

    if ( this.loginForm.valid ) {
      this.authService.login( this.loginForm.value )
        .pipe( takeUntil( this.destroy$ ) )
        .subscribe( {
          next: () => this.router.navigate( ['/'] ),
          error: ( err: HttpErrorResponse ) => {

          }
        } )
    }
  }
}
