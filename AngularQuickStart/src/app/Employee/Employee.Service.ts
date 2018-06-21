import {Injectable} from '@angular/core';
import { IEmployee } from './Employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

    constructor(private _http:Http) { }
    GetAllEmployee(): Observable<IEmployee[]>{
        return this._http.get("http://localhost:12268/api/Employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.HandleError);
    }
    GetEmployeeById(code: string): Promise<IEmployee> {
        return this._http.get("http://localhost:12268/api/Employees/" + code)
            .map((response: Response) => <IEmployee>response.json())
            .toPromise()
            .catch(this.HandlePromiseError);
    }

    HandlePromiseError(error: Response) {
        console.error(error);
        throw(error);
    }

    HandleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}