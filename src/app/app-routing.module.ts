import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';
import { SimpledialogComponent } from './simpledialog/simpledialog.component';

const routes: Routes = [
  { path: 'simpledialog', component: SimpledialogComponent },
  { path: 'alertdialog', component: AlertdialogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
