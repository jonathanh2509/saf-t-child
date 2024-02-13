import { Component, HostListener } from '@angular/core';
import { windowBreakpoint } from '../../environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Safe-T-Child';
  s = 'Capstone Project Team 7';
  isMobile: boolean = window.innerWidth < windowBreakpoint; // Example breakpoint
  showOverlay: boolean = false;

  get overlayClass() {
    return this.showOverlay ? '' : 'menu-overlay-hidden';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < windowBreakpoint;
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }
}
