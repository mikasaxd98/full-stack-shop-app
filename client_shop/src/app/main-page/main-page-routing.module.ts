import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageContainerComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfileModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomeModule)
      }
    ]
  },
/*  {
    path: 'profile',
    component: UserProfilePageContainerComponent,
    canActivate: [authGuard],
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
