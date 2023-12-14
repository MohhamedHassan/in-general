import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinusParentComponent } from './components/joinus-parent/joinus-parent.component';

const routes: Routes = [
  {
    path:'',
    component:JoinusParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRoutingModule { }
