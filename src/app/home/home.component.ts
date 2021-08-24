import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import * as ons from 'onsenui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {}

  loadload(){
    console.log('aa')
    this.router.navigateByUrl('load');
  }

  loadMenu(){
    this.router.navigateByUrl('menu');
  }

  ngOnInit(): void {}

}
