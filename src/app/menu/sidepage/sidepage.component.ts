import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu-service/menu-service.component';

@Component({
  selector: 'app-sidepage',
  templateUrl: './sidepage.component.html',
  styleUrls: ['./sidepage.component.scss']
})
export class SidepageComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

}
