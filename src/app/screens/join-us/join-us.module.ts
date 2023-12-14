import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinUsRoutingModule } from './join-us-routing.module';
import { JoinusHeaderComponent } from './components/joinus-header/joinus-header.component';
import { JoinusParentComponent } from './components/joinus-parent/joinus-parent.component';
import { JoinusFormComponent } from './components/joinus-form/joinus-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JoinusHeaderComponent,
    JoinusParentComponent,
    JoinusFormComponent
  ],
  imports: [
    CommonModule,
    JoinUsRoutingModule,
    SharedModule
  ]
})
export class JoinUsModule { }
