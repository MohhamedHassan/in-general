import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
interface navBarLinks {
  name:string;
  icon?:boolean;
  class?:string
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  navbarLinks!: navBarLinks[]
  items: MenuItem[] | undefined;
  openNav:boolean=false
  constructor() {}
  
  ngOnInit() {
    this.links()
  }


links() {
  this.navbarLinks = [
    {
      name:'Home',
      class:'active'
    },
    {
      name:'Categories',
      icon:true,
    },
    {
      name:'Portfolio',
    },
    {
      name:'About Us'
    },
    {
      name:'Join us'
    }
  ];
    this.items = [
        {
            items: [
                {
                    label: 'ENG'
                },
                {
                    label: 'AR'
                }
            ]
        }
    ];
}
}
