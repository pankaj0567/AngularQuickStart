import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div>
        <h1>{{name}}</h1>
        <Employee-Details></Employee-Details>
      </div>  
        `,
})
export class AppComponent  { name = 'Employee Details'; }
