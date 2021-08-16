import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from 'ng-sidebar';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SimpledialogComponent } from './simpledialog/simpledialog.component';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';

@NgModule({
  declarations: [AppComponent,
     HomeComponent, 
     SimpledialogComponent, 
     AlertdialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    OnsenModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
