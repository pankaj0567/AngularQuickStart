import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {EmployeeComponent}   from './Employee/Employee.Component'

@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent , EmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
