import {Component , Input, Output, EventEmitter} from '@angular/core';
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

    RadioButtonSelectedValue:string ='All';

    @Output()
    OnRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

    OnRadioButtonSelectionChange(){
        this.OnRadioButtonSelectionChanged.emit(this.RadioButtonSelectedValue);
        console.log(this.RadioButtonSelectedValue);
    }
}