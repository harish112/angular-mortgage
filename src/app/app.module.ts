import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import Contact from '../contact/contact.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import Calculator from '../calculator/calculator.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

// import Form from '../form/form.component';

const routes: Routes = [{ path: 'main', component: Calculator }];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSliderModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, HelloComponent, Calculator, ContactComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
