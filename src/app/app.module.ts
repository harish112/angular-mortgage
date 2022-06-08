import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import Calculator from '../calculator/calculator.component';
import Form from '../form/form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Calculator, Form],
  bootstrap: [AppComponent],
})
export class AppModule {}
