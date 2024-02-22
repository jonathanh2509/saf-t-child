import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  @Output() toggleOverlay = new EventEmitter<void>();
  @Input() userAuthenticated: boolean = false;
  @Output() logout = new EventEmitter<void>();
  showMenu() {
    this.toggleOverlay.emit();
  }

  onLogout() {
    this.logout.emit();
  }
}
