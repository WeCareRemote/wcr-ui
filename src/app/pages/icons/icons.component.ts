import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICON_REGISTRY, IconRegistryItem } from './icons.registry';

@Component({
  selector: 'wcr-icons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  icons: IconRegistryItem[] = ICON_REGISTRY;
  selectedIcon: IconRegistryItem | null = this.icons[0] ?? null;
  activeTab: 'controls' | 'actions' | 'interactions' | 'docs' = 'controls';

  sizeOptions = [16, 20, 24, 28, 32, 40, 48, 56];
  selectedSize = 32;
  selectedColor = '#111827';
  selectedStrokeWidth = 2;

  constructor(private readonly sanitizer: DomSanitizer) {}

  safeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  selectIcon(icon: IconRegistryItem): void {
    this.selectedIcon = icon;
  }

  get renderedSvg(): string {
    if (!this.selectedIcon) return '';
    let svg = this.selectedIcon.svg;
    if (svg.match(/<svg[^>]*\\bwidth=\\\"/i)) {
      svg = svg.replace(/width=\\\"[^\\\"]+\\\"/i, `width=\"${this.selectedSize}\"`);
    } else {
      svg = svg.replace(/<svg/i, `<svg width=\"${this.selectedSize}\"`);
    }
    if (svg.match(/<svg[^>]*\\bheight=\\\"/i)) {
      svg = svg.replace(/height=\\\"[^\\\"]+\\\"/i, `height=\"${this.selectedSize}\"`);
    } else {
      svg = svg.replace(/<svg/i, `<svg height=\"${this.selectedSize}\"`);
    }
    svg = svg.replace(/stroke=(['\"])currentColor\\1/g, `stroke=\"${this.selectedColor}\"`);
    svg = svg.replace(/fill=(['\"])currentColor\\1/g, `fill=\"${this.selectedColor}\"`);
    svg = svg.replace(/fill=(['\"])([^'\"]+)\\1/gi, (match, quote, value) => {
      const normalized = value.trim().toLowerCase();
      if (normalized === 'none' || normalized.startsWith('url(')) return match;
      return `fill=\"${this.selectedColor}\"`;
    });
    svg = svg.replace(/stroke=(['\"])([^'\"]+)\\1/gi, (match, quote, value) => {
      const normalized = value.trim().toLowerCase();
      if (normalized === 'none' || normalized.startsWith('url(')) return match;
      return `stroke=\"${this.selectedColor}\"`;
    });
    const svgTagMatch = svg.match(/<svg[^>]*>/i);
    if (svgTagMatch) {
      const svgTag = svgTagMatch[0];
      const withStyle = svgTag.replace(
        /<svg/i,
        `<svg style=\"color:${this.selectedColor}\"`
      );
      svg = svg.replace(svgTag, withStyle);
    }
    svg = svg.replace(/stroke-width=(['\"])\\d*\\.?\\d+\\1/g, `stroke-width=\"${this.selectedStrokeWidth}\"`);
    return svg;
  }

  async copySvg(): Promise<void> {
    if (!this.renderedSvg) return;
    try {
      await navigator.clipboard.writeText(this.renderedSvg);
    } catch {
      // Ignore clipboard errors for now.
    }
  }

  downloadSvg(): void {
    if (!this.renderedSvg) return;
    const blob = new Blob([this.renderedSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${this.selectedIcon?.selector ?? 'icon'}.svg`;
    anchor.click();
    URL.revokeObjectURL(url);
  }
}

