import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { DeviceService } from '../../../shared/services/device.service';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import { Router } from '@angular/router';
import { NAV_ITEMS } from '../../../shared/consts/nav-items';



@Component( {
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NavBarComponent {
  @ViewChild( 'drawer', { static: false } )
  public drawer: MatSidenav;

  @ViewChild( 'button', { static: false } )
  public button: MatIconButton;

  public NAV_ITEMS = NAV_ITEMS;

  constructor( public deviceService: DeviceService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.deviceService.isMobile$.pipe(
      distinctUntilChanged(),
    ).subscribe( ( isMobile: boolean ) => {
      this.cdr.detectChanges();
      if ( isMobile ) {
        fromEvent( this.button?._elementRef.nativeElement, 'click' ).subscribe( {
          next: () => {
            this.drawer.toggle();
            this.cdr.detectChanges();
          },
        } )
      }
    } )
  }

}
