import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import Calculator from '../calculator/calculator.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path: 'main', component: Calculator },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
