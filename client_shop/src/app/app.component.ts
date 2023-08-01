import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { DeviceService } from './shared/services/device.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
  constructor( private authService: AuthService, private deviceService: DeviceService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.deviceService.setScreenSize(window.innerWidth);
    this.deviceService.checkScreenSize();
  }


  ngOnInit() {
    const potentialToken = localStorage.getItem( 'auth-token' );
    if ( potentialToken ) {
      this.authService.setToken( potentialToken );
    }
    this.deviceService.setScreenSize(window.innerWidth);
    this.deviceService.checkScreenSize();
  }
}
