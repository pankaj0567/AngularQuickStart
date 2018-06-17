import {Component} from '@angular/core';
import { IEmployee } from './Employee';


@Component({
    selector:'<EmployeeList></EmployeeList>',
    templateUrl:'./EmployeeList.Component.html'
})
export class EmployeeListComponent{
    employees: IEmployee[];
    constructor()
    {
       this.employees= [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '6/25/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
        ];
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

