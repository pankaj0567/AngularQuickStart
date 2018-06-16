import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div>
        Enter Name <input type="text" [(ngModel)]='name' />
        Your Name : {{name}}
      </div>  
        `,
})
export class AppComponent  { 
  name = 'Pankaj'; 
}
