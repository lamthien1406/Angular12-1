import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentpageComponent } from '../contentpage/contentpage.component';
import { MenuService } from '../menu-service/menu-service.component';
import { SidepageComponent } from '../sidepage/sidepage.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sidePage = SidepageComponent;
  contentPage = ContentpageComponent;
  @ViewChild('splitter') splitter: any;

  constructor(private menuService: MenuService) { 
    this.menuService.menu$.subscribe(() => 
    this.splitter.nativeElement.side.open());
  }

  ngOnInit(): void {
  }

}
