import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    MainPageContainerComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class MainPageModule { }
