import {Component,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector:'simple',
    template:`Your Name {{Name}}`
})
export class SimpleComponent implements OnChanges {
    @Input()
    Name:string;

    ngOnChanges(Simple:SimpleChanges):void
    {
         for(let property in Simple)
         {
             let change=Simple[property];
             let prev=change.previousValue;
             let cur=change.currentValue;
             console.log(property +': current value='+cur +'  previous value='+prev);
         }   
    }

}


