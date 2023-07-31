import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { UserProfilePageContainerComponent } from './components/user-profile-page-container/user-profile-page-container.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageContainerComponent
  },
  {
    path: 'profile',
    component: UserProfilePageContainerComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
