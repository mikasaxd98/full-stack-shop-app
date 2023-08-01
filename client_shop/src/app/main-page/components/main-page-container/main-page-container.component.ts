import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from '../../../shared/services/device.service';
import { MatSidenav } from '@angular/material/sidenav';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import { MatIconButton } from '@angular/material/button';

@Component( {
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss'],
} )
export class MainPageContainerComponent implements AfterViewInit {
  @ViewChild( 'drawer', { static: false } )
  public drawer: MatSidenav;

  @ViewChild( 'button', { static: false } )
  public button: MatIconButton;


  constructor( public deviceService: DeviceService, private cdr: ChangeDetectorRef ) {
  }

  ngAfterViewInit() {
    this.deviceService.isMobile$.pipe(
      distinctUntilChanged(),
    ).subscribe( ( isMobile: boolean ) => {
      this.cdr.detectChanges();
      if ( isMobile )
        fromEvent( this.button?._elementRef.nativeElement, 'click' ).subscribe( {
          next: () => this.drawer.toggle(),
        } )
    } )
  }

}
