import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
              Enter Name : <input type="text" [(ngModel)]='name' /><br/>
              <simple [Name]='name'></simple>
        `,
})
export class AppComponent  { 
  name = 'Pankaj'; 
}
