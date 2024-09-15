import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeIcon: string | null = null;

  handleNavbarItemClick(iconName : string): void {
    this.activeIcon = iconName;
  }

  getIconSource(iconName: string): string {
    return this.activeIcon === iconName ? `/navbar/${iconName}-active.svg` : `/navbar/${iconName}.svg`;
  }
}
