import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-menu-service',
  templateUrl: './menu-service.component.html',
  styleUrls: ['./menu-service.component.scss']
})
export class MenuService implements OnInit {

  subject = new Subject();

  constructor() { }

  get menu$(): any {
    console.log('get menu')
    return this.subject.asObservable();
  }
  open(): void  {
    console.log('open');
    this.subject.next();
  }

  ngOnInit(): void {
  }

}
