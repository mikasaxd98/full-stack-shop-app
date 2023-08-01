import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class DeviceService {
  public isMobile$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false );
  public screenSize: number = 0;
  public mobileSize: number = 650;

  constructor() {
  }

  public setScreenSize (size: number) {
    this.screenSize = size;
  }

  public checkScreenSize() {
    if ( this.screenSize <= this.mobileSize ) {
      this.isMobile$.next( true );
    } else {
      this.isMobile$.next( false );
    }
  }
}
