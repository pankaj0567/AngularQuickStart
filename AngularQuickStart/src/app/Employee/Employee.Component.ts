import { Component } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector:'<Employee-Details></Employee-Details>',
    templateUrl :'./Employee.Component.html'
})
export class EmployeeComponent{
    firstName='pankaj';
    lastName:string ='kumar';
    Age='21';
    Gender:string ='Male';
}
