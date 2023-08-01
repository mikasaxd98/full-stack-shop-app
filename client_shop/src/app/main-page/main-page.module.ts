import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { UserProfilePageContainerComponent } from './components/user-profile-page-container/user-profile-page-container.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    MainPageContainerComponent,
    UserProfilePageContainerComponent
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
