import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadmenu',
  templateUrl: './loadmenu.component.html',
  styleUrls: ['./loadmenu.component.scss']
})
export class LoadmenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
