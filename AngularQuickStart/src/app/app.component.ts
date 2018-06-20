import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
          <div>
          <a routerLink="home" >Home</a>
          <a routerLink="employees" >Employee</a>
          </div>
          <div>
              <router-outlet></router-outlet>
          </div>
        `,
})
export class AppComponent  { 
  name = 'Pankaj'; 
}
