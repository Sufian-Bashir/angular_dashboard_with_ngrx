import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsContainerComponent } from './pages/tabs-container/tabs-container.component';

const routes: Routes = [
  {
    path: '',
    component: TabsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
