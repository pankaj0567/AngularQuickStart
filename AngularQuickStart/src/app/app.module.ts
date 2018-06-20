import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import {EmployeeComponent}   from './Employee/Employee.Component';
import { EmployeeListComponent } from './Employee/EmloyeeList.Component';
import { EmployeeTitlePipe } from './Employee/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './Employee/EmployeeCount.Component';
import { SimpleComponent} from './Others/Simple.Component';
import { HomeComponent } from './Home/Home.Component';
import { PageNotFoundComponent } from './Others/PageNotFound.Component';


const AllRoute:Routes=[
  {path : 'home' , component : HomeComponent },
  { path : 'employees', component : EmployeeListComponent},
  { path : '', redirectTo : '/home' , pathMatch:'full' },
  { path : '**' , component : PageNotFoundComponent  }
];



@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,RouterModule.forRoot(AllRoute) ],
  declarations: [ AppComponent , EmployeeComponent , EmployeeListComponent, EmployeeTitlePipe, 
    EmployeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
