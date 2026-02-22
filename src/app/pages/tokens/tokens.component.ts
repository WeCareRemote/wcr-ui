import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

type ColorToken = {
  name: string;
  value: string;
  description?: string;
};

type ScaleToken = {
  name: string;
  value: string;
  description?: string;
};

type TypographyToken = {
  name: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing?: string;
  description?: string;
};

type ShadowToken = {
  name: string;
  value: string;
};

type OpacityToken = {
  name: string;
  value: string;
};

type BorderToken = {
  name: string;
  value: string;
};

type ZIndexToken = {
  name: string;
  value: number;
};

type TokenCategory =
  | 'all'
  | 'colors'
  | 'spacing'
  | 'radius'
  | 'typography'
  | 'shadows'
  | 'opacity'
  | 'borders'
  | 'zindex';

@Component({
  selector: 'wcr-tokens',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.scss'
})
export class TokensComponent {
  searchQuery = '';
  viewMode: 'grid' | 'table' = 'grid';
  activeCategory: TokenCategory = 'all';
  toastMessage = '';
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  categories: { id: TokenCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'colors', label: 'Colors' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'radius', label: 'Radius' },
    { id: 'typography', label: 'Typography' },
    { id: 'shadows', label: 'Shadows' },
    { id: 'opacity', label: 'Opacity' },
    { id: 'borders', label: 'Borders' },
    { id: 'zindex', label: 'Z-index' }
  ];

  colors: ColorToken[] = [
    { name: 'Brand 900', value: '#1e1e1e' },
    { name: 'Brand 800', value: '#2c2c2c' },
    { name: 'Brand 700', value: '#383838' },
    { name: 'Brand 500', value: '#757575' },
    { name: 'Neutral 900', value: '#303030' },
    { name: 'Neutral 700', value: '#5a5a5a' },
    { name: 'Neutral 300', value: '#cdcdcd' },
    { name: 'Neutral 100', value: '#f3f3f3' },
    { name: 'Positive', value: '#14ae5c', description: 'Success and confirmation states.' },
    { name: 'Warning', value: '#e8b931', description: 'Caution and attention states.' },
    { name: 'Danger', value: '#ec221f', description: 'Errors and destructive actions.' },
    { name: 'Info', value: '#00affe', description: 'Informational states.' }
  ];

  spacing: ScaleToken[] = [
    { name: 'Space 100', value: '0.4rem' },
    { name: 'Space 200', value: '0.8rem' },
    { name: 'Space 300', value: '1.2rem' },
    { name: 'Space 400', value: '1.6rem' },
    { name: 'Space 500', value: '2rem' },
    { name: 'Space 600', value: '2.4rem' },
    { name: 'Space 700', value: '2.8rem' },
    { name: 'Space 800', value: '3.2rem' },
    { name: 'Space 1000', value: '4rem' }
  ];

  radius: ScaleToken[] = [
    { name: 'Radius 100', value: '4px' },
    { name: 'Radius 150', value: '6px' },
    { name: 'Radius 200', value: '8px' },
    { name: 'Radius 300', value: '12px' },
    { name: 'Radius 400', value: '16px' },
    { name: 'Radius 500', value: '20px' },
    { name: 'Radius Full', value: '9999px' }
  ];

  typography: TypographyToken[] = [
    { name: 'Heading XL', size: '40px', weight: '700', lineHeight: '48px', letterSpacing: '-0.02em' },
    { name: 'Heading L', size: '32px', weight: '700', lineHeight: '40px', letterSpacing: '-0.02em' },
    { name: 'Heading M', size: '24px', weight: '600', lineHeight: '32px' },
    { name: 'Heading S', size: '20px', weight: '600', lineHeight: '28px' },
    { name: 'Body L', size: '16px', weight: '400', lineHeight: '24px' },
    { name: 'Body M', size: '14px', weight: '400', lineHeight: '20px' },
    { name: 'Caption', size: '12px', weight: '500', lineHeight: '16px' }
  ];

  shadows: ShadowToken[] = [
    { name: 'Shadow XS', value: '0 1px 2px rgba(15, 23, 42, 0.06)' },
    { name: 'Shadow SM', value: '0 4px 8px rgba(15, 23, 42, 0.08)' },
    { name: 'Shadow MD', value: '0 10px 24px rgba(15, 23, 42, 0.12)' },
    { name: 'Shadow LG', value: '0 20px 48px rgba(15, 23, 42, 0.16)' }
  ];

  opacity: OpacityToken[] = [
    { name: 'Opacity 90', value: '0.9' },
    { name: 'Opacity 80', value: '0.8' },
    { name: 'Opacity 60', value: '0.6' },
    { name: 'Opacity 40', value: '0.4' },
    { name: 'Opacity 20', value: '0.2' }
  ];

  borders: BorderToken[] = [
    { name: 'Border Subtle', value: '1px solid #e5e7eb' },
    { name: 'Border Strong', value: '1px solid #cbd5f5' },
    { name: 'Border Focus', value: '2px solid #6366f1' }
  ];

  zIndex: ZIndexToken[] = [
    { name: 'Base', value: 1 },
    { name: 'Sticky', value: 10 },
    { name: 'Overlay', value: 50 },
    { name: 'Modal', value: 100 },
    { name: 'Toast', value: 200 }
  ];

  get totalTokens(): number {
    return (
      this.colors.length +
      this.spacing.length +
      this.radius.length +
      this.typography.length +
      this.shadows.length +
      this.opacity.length +
      this.borders.length +
      this.zIndex.length
    );
  }

  showSection(section: string): boolean {
    return this.activeCategory === 'all' || this.activeCategory === section;
  }

  filteredColors(): ColorToken[] {
    return this.filterTokens(this.colors, (token) => `${token.name} ${token.value} ${token.description ?? ''}`);
  }

  filteredSpacing(): ScaleToken[] {
    return this.filterTokens(this.spacing, (token) => `${token.name} ${token.value}`);
  }

  filteredRadius(): ScaleToken[] {
    return this.filterTokens(this.radius, (token) => `${token.name} ${token.value}`);
  }

  filteredTypography(): TypographyToken[] {
    return this.filterTokens(
      this.typography,
      (token) => `${token.name} ${token.size} ${token.weight} ${token.lineHeight} ${token.letterSpacing ?? ''}`
    );
  }

  filteredShadows(): ShadowToken[] {
    return this.filterTokens(this.shadows, (token) => `${token.name} ${token.value}`);
  }

  filteredOpacity(): OpacityToken[] {
    return this.filterTokens(this.opacity, (token) => `${token.name} ${token.value}`);
  }

  filteredBorders(): BorderToken[] {
    return this.filterTokens(this.borders, (token) => `${token.name} ${token.value}`);
  }

  filteredZIndex(): ZIndexToken[] {
    return this.filterTokens(this.zIndex, (token) => `${token.name} ${token.value}`);
  }

  tokenVar(name: string): string {
    return `--wcr-${toSlug(name)}`;
  }

  copyTokenValue(value: string): void {
    this.copyText(value);
    this.showToast(`Copied value: ${value}`);
  }

  copyTokenCss(name: string, value: string): void {
    this.copyText(`${this.tokenVar(name)}: ${value};`);
    this.showToast(`Copied CSS: ${this.tokenVar(name)}`);
  }

  downloadTokens(): void {
    const payload = {
      colors: this.colors,
      spacing: this.spacing,
      radius: this.radius,
      typography: this.typography,
      shadows: this.shadows,
      opacity: this.opacity,
      borders: this.borders,
      zIndex: this.zIndex
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'wcr-tokens.json';
    anchor.click();
    URL.revokeObjectURL(url);
  }

  private filterTokens<T>(tokens: T[], toSearch: (token: T) => string): T[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return tokens;
    return tokens.filter((token) => toSearch(token).toLowerCase().includes(query));
  }

  private async copyText(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Ignore clipboard errors for now.
    }
  }

  private showToast(message: string): void {
    this.toastMessage = message;
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    this.toastTimer = setTimeout(() => {
      this.toastMessage = '';
    }, 2200);
  }
}
