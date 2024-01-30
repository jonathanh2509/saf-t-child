import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrl: './mobile-login.component.scss'
})
export class MobileLoginComponent {
  // Class binding property
  contentActive = false;

  ngOnInit() {
    // Add a slight delay to allow the route transition to begin
    setTimeout(() => this.contentActive = true, 10);
  }

}
