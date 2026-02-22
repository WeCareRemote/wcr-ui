import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navSearchQuery = '';

  readonly navItems = [
    { label: 'Components', path: '/components' },
    { label: 'Tokens', path: '/tokens' },
    { label: 'Icons', path: '/icons' },
    { label: 'Layouts', path: '/layouts' }
  ];

  constructor(private readonly router: Router) {}

  goToTokens(): void {
    this.router.navigate(['/tokens']);
  }

  refreshPage(): void {
    window.location.reload();
  }

  get filteredNavItems() {
    const query = this.navSearchQuery.trim().toLowerCase();
    if (!query) return [];
    return this.navItems.filter((item) => item.label.toLowerCase().includes(query));
  }

  navigateToPath(path: string): void {
    this.router.navigate([path]);
    this.navSearchQuery = '';
  }

  navigateFirstMatch(): void {
    const first = this.filteredNavItems[0];
    if (first) {
      this.navigateToPath(first.path);
    }
  }

  clearNavSearch(): void {
    this.navSearchQuery = '';
  }
}
