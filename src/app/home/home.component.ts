import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('alertDialog') el: any;

  opened: boolean = false;

  constructor(private rd: Renderer2) {}

  ngOnInit(): void {}

  showAlerDiglog() {
    this.el.nativeElement.show();
  }
  closeaAlertDialog() {
    this.el.nativeElement.hide();
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

  alert() {
    ons.notification.alert('Hello, world!');
  }

  confirm() {
    ons.notification.confirm({
      message:
        'This dialog can be canceled by tapping the background or using the back button on your device.',
      cancelable: true,
      callback: (i: number) => {
        if (i == -1) {
          ons.notification.alert({ message: 'You canceled it!' });
        }
      },
    });
  }

  
  prompt() {
    ons.notification.prompt({
      message: 'What is the meaning of Life, the Universe and Everything?',
      callback: (answer: string) => {
        if (answer === '42') {
          ons.notification.alert({ message: "That's the correct answer!" });
        } else {
          ons.notification.alert({ message: 'Incorrect! Please try again!' });
        }
      },
    });
  }

  toast() {
    ons.notification.toast('Hello, world!', { timeout: 2000 });
  }
}
