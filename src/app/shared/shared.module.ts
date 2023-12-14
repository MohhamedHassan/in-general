import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { InputComponent } from './components/input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule
  ],
  exports: [
    MenuModule,
    InputComponent,
    InputTextModule,
    DropdownModule,
    InputTextareaModule
  ]
})
export class SharedModule { }
