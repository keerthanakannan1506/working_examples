import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   clickMessage = '';
     values = '';


  onClickMe() {
    this.clickMessage = 'keekee!';
  }

  onKey(event: any)
   { // without type info

   console.log(event);
  
    this.values += event.target.value + ' $ ';
  }
}
