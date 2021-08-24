import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu-service/menu-service.component';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.scss']
})
export class ContentpageComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  openMenu() {
    console.log('openMenu')
    this.menuService.open();
  }
  
  ngOnInit(): void {
  }

}
