import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'app-simpledialog',
  templateUrl: './simpledialog.component.html',
  styleUrls: ['./simpledialog.component.scss']
})
export class SimpledialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  confirm() {
    ons.notification.confirm({
      message: 'This dialog can be canceled by tapping the background or using the back button on your device.',
      cancelable: true,
      callback: (i: number) => {
        if (i == -1) {
          ons.notification.alert({message: 'You canceled it!'});
        }
      }
    });
  }

}
