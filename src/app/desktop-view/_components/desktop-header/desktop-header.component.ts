import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss',
})
export class DesktopHeaderComponent {
  @Input() userAuthenticated: boolean = false;
  @Output() logout = new EventEmitter<void>();
  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  onLogout() {
    this.logout.emit();
  }
}
