import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'EmployeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform{
    transform(value:string , gender:string)
    {
        if(gender=='Male')
        {
            return "Mr."+value;
        }
        else
        {
            return "Miss." + value;
        }
    }
}