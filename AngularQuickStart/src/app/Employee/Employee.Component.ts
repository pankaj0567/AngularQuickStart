import { Component , OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from './Employee.Service';
import { IEmployee } from './Employee';
import { Route } from '@angular/router/src/config';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'Employee-Details',
    templateUrl: './Employee.Component.html',
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = "Loading Employee"
    subscrition: ISubscription;
    constructor(private _employeeService: EmployeeService,
        private _activateRoute: ActivatedRoute,
        private _router: Router) { }

    CancelledRequest() {
        this.statusMessage = 'Cancelled request';
        this.subscrition.unsubscribe();
    }

    ngOnInit() {
        let EmployeeCode: string = this._activateRoute.snapshot.params['code'];
        this.subscrition=this._employeeService.GetEmployeeById(EmployeeCode)
            .retryWhen((err) => {
                return err.scan((retryCount, val) => {
                    retryCount++;
                    if (retryCount <= 5) {
                        this.statusMessage = "retry....attempt # " + retryCount;
                        return retryCount;
                    }
                    else {
                        this.statusMessage = "Problem with service. Please try again after some time";
                        throw (err);
                    }
                },0).delay(2000)
            })
            .subscribe(
            (employeeData) => this.employee = employeeData,
            (error) => {
                console.error(error);
            }
        );
    }
    BackToEmployeeList():void{
        this._router.navigate(['/employees']);
    }
}
