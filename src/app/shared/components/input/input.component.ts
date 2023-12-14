import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label:string=''
  @Input() options:any[]=[]
  @Input() type:'text'|'textarea'|'select'='text'
}
