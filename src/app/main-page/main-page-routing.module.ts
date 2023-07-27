import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
