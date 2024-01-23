

import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Safe-T-Child';
  isMobile: boolean = window.innerWidth < 768; // Example breakpoint
  showOverlay: boolean = false;
  get overlayClass() {
    return this.showOverlay ? '' : 'menu-overlay-hidden';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  } 
}