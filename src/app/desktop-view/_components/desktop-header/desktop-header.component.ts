import { Component } from '@angular/core'

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss',
})
export class DesktopHeaderComponent {
  dropdownOpen = false
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen
  }

  closeDropdown() {
    this.dropdownOpen = false
  }
}
