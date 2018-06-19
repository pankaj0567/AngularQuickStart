import {Component, OnInit } from '@angular/core';
import { IEmployee } from './Employee';
import { EmployeeService } from './Employee.Service';


@Component({
    selector:'<EmployeeList></EmployeeList>',
    templateUrl:'./EmployeeList.Component.html',
    providers : [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    statusMessage: string ="Loading Employee....Please Wait.";
    constructor(private _GetEmployeeFromService : EmployeeService)
    {

    }

    ngOnInit() {
        this._GetEmployeeFromService.GetAllEmployee().subscribe(
            (EmployeeDate) => this.employees = EmployeeDate,
            (error) => {
                this.statusMessage = "There is an error in service. Please try again after some time.";
                console.error(error);
            });
    }
    GetAllEmployee():number
    {
        return this.employees.length;
    }
    GetAllMaleEmployee():number
    {
        return this.employees.filter(emp=>emp.gender==='Male').length;
    }
    GetAllFemaleEmployee():number
    {
        return this.employees.filter(emp=>emp.gender==='Female').length;
    }

    RadioButtonSelection:string='All';

    onRadioButtonSelectionChanged(value:string){
            this.RadioButtonSelection=value;
    }
}

