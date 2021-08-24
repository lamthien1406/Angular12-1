import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('splitter') splitter: any;

  constructor() { 
    this.menu$.subscribe(() => 
    this.splitter.nativeElement.side.open());
  }

  subject = new Subject();
  get menu$(): Observable<any> {
    return this.subject.asObservable();
  }
  
  openMenu() {
    this.subject.next();
  }

  ngOnInit(): void {
  }

}
