import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
} )
export class RegisterComponent implements OnDestroy {
  public registerForm: FormGroup;

  public errors: string[] = []

  private destroy$: Subject<any> = new Subject<any>();

  public get email() {
    return this.registerForm.get( 'email' );
  }

  public get password() {
    return this.registerForm.get( 'password' );
  }

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup( {
      email: new FormControl( '', Validators.required ),
      password: new FormControl( '', Validators.required ),
    } );
  }

  ngOnDestroy() {
    this.destroy$.next( true );
  }

  public submitForm() {
    this.registerForm.markAllAsTouched();

    if ( this.registerForm.valid ) {
      this.registerForm.disable();
      this.authService.register( this.registerForm.value )
        .pipe( takeUntil( this.destroy$ ) )
        .subscribe( {
          next: () => this.router.navigate( ['/'] ),
          error: ( err: HttpErrorResponse ) => {
            this.errors = err.error.errors.map( (x: any) => x.message );
          }
        } )
    }
  }
}
