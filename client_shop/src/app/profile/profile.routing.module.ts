import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';

const router: Routes = [{
  path: '',
  component: ProfileContainerComponent
}]

@NgModule( {
  declarations: [],
  imports: [RouterModule.forChild( router )
  ]
} )
export class ProfileRoutingModule {
}
