import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'authentication';
  showHead: boolean = false;
  constructor(private _router: Router){
    // on route change to '/login', set the variable showHead to false
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if(event['url'] == '/profile' || event['url'] == '/change-password') {
          this.showHead = true;
        } else{
          this.showHead = false;
        }
      }
    });
  }
}
