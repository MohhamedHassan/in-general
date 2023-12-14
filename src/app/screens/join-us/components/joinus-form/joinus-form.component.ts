import { Component } from '@angular/core';

@Component({
  selector: 'app-joinus-form',
  templateUrl: './joinus-form.component.html',
  styleUrls: ['./joinus-form.component.scss']
})
export class JoinusFormComponent {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
}
