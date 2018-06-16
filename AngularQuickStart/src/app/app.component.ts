import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div>
        Enter Name <input type="text" [value]='name' (input)='name=$event.target.value' />
        Your Name : {{name}}
      </div>  
        `,
})
export class AppComponent  { 
  name = 'Pankaj'; 
}
