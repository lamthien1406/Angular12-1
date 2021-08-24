import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuComponent } from './menu/menu/menu.component';
import { SidepageComponent } from './menu/sidepage/sidepage.component';
import { ContentpageComponent } from './menu/contentpage/contentpage.component';
import { MenuService } from './menu/menu-service/menu-service.component';
import { LoadmenuComponent } from './menu/loadmenu/loadmenu.component';

@NgModule({
  declarations: [AppComponent,
     HomeComponent,
     MenuComponent,
     SidepageComponent,
     ContentpageComponent,
     MenuService,
     LoadmenuComponent, 
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
