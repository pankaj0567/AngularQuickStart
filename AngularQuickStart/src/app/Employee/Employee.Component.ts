import { Component , OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from './Employee.Service';
import { IEmployee } from './Employee';

@Component({
    selector:'Employee-Details',
    templateUrl: './Employee.Component.html',
    providers: [ EmployeeService]
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;

    constructor(private _employeeService: EmployeeService, private _activateRoute: ActivatedRoute) { }

    ngOnInit() {
        let EmployeeCode: string = this._activateRoute.snapshot.params['code'];
        this._employeeService.GetEmployeeById(EmployeeCode).subscribe(
            (EmployeeFirstOrDefault) => this.employee = EmployeeFirstOrDefault,
                (error)=> {
                console.error(error);
            }
        );
    }
}
