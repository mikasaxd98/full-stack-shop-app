import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { UserProfilePageContainerComponent } from './components/user-profile-page-container/user-profile-page-container.component';



@NgModule({
  declarations: [
    MainPageContainerComponent,
    UserProfilePageContainerComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
