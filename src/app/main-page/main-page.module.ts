import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { MainPageRoutingModule } from './main-page-routing.module';



@NgModule({
  declarations: [
    MainPageContainerComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
