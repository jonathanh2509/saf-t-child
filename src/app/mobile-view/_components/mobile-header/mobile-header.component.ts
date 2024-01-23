import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
  @Output() toggleOverlay = new EventEmitter<void>();

  showMenu() {
   
    console.log('Toggle overlay');
    this.toggleOverlay.emit();
  }
}
