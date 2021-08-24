import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadmenuComponent } from './menu/loadmenu/loadmenu.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  { path: 'load', component: LoadmenuComponent },
  { path: 'menu', component: MenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
