import { Component , OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from './Employee.Service';
import { IEmployee } from './Employee';
import { Route } from '@angular/router/src/config';

@Component({
    selector:'Employee-Details',
    templateUrl: './Employee.Component.html',
    providers: [ EmployeeService]
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;

    constructor(private _employeeService: EmployeeService,
                private _activateRoute: ActivatedRoute,
                private _router:Router) { }

    ngOnInit() {
        let EmployeeCode: string = this._activateRoute.snapshot.params['code'];
        this._employeeService.GetEmployeeById(EmployeeCode).subscribe(
            (EmployeeFirstOrDefault) => this.employee = EmployeeFirstOrDefault,
                (error)=> {
                console.error(error);
            }
        );
    }
    BackToEmployeeList():void{
        this._router.navigate(['/employees']);
    }
}
