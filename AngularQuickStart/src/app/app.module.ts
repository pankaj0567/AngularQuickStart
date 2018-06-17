import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {EmployeeComponent}   from './Employee/Employee.Component';
import { EmployeeListComponent } from './Employee/EmloyeeList.Component';
import { EmployeeTitlePipe } from './Employee/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './Employee/EmployeeCount.Component';
import { SimpleComponent} from './Others/Simple.Component';

@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent , EmployeeComponent , EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
