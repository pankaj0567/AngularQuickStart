import {Component , Input} from '@angular/core';
@Component({
    selector : '<employeeCount></employeeCount>',
    templateUrl: './EmployeeCount.Component.html'
})
export class EmployeeCountComponent {
    @Input()
    All:number;

    @Input()
    Male:number;

    @Input()
    Female:number;
}