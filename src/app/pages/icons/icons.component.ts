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
  selectedIcon: IconRegistryItem | null = null;
  activeTab: 'controls' | 'actions' | 'interactions' | 'docs' = 'controls';
  panelOpen = true;
  panelHeight = 360;
  private resizeStartY = 0;
  private resizeStartHeight = 0;
  private readonly minPanelHeight = 220;
  private readonly maxPanelHeight = 680;
  private readonly handleResizeMove = (event: PointerEvent) => this.onResizeMove(event);
  private readonly handleResizeEnd = () => this.onResizeEnd();

  sizeOptions = [16, 20, 24, 28, 32, 40, 48, 56];
  selectedSize = 32;
  selectedColor = '#111827';
  selectedStrokeWidth = 2;
  searchQuery = '';

  constructor(private readonly sanitizer: DomSanitizer) {}

  safeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  selectIcon(icon: IconRegistryItem): void {
    this.selectedIcon = icon;
    this.panelOpen = true;
  }

  closePanel(): void {
    this.panelOpen = false;
  }

  get filteredIcons(): IconRegistryItem[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return this.icons;
    return this.icons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(query) ||
        icon.selector.toLowerCase().includes(query)
    );
  }

  onResizeStart(event: PointerEvent): void {
    this.resizeStartY = event.clientY;
    this.resizeStartHeight = this.panelHeight;
    window.addEventListener('pointermove', this.handleResizeMove);
    window.addEventListener('pointerup', this.handleResizeEnd);
  }

  private onResizeMove(event: PointerEvent): void {
    const delta = this.resizeStartY - event.clientY;
    const nextHeight = this.resizeStartHeight + delta;
    this.panelHeight = Math.min(this.maxPanelHeight, Math.max(this.minPanelHeight, nextHeight));
  }

  private onResizeEnd(): void {
    window.removeEventListener('pointermove', this.handleResizeMove);
    window.removeEventListener('pointerup', this.handleResizeEnd);
  }

  get renderedSvg(): string {
    if (!this.selectedIcon) return '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.selectedIcon.svg, 'image/svg+xml');
    const svgEl = doc.querySelector('svg');
    if (!svgEl) return this.selectedIcon.svg;

    svgEl.setAttribute('width', `${this.selectedSize}`);
    svgEl.setAttribute('height', `${this.selectedSize}`);
    svgEl.setAttribute('style', `color:${this.selectedColor}`);
    svgEl.setAttribute('fill', this.selectedColor);
    svgEl.setAttribute('stroke', this.selectedColor);

    doc.querySelectorAll('[fill]').forEach((node) => {
      const value = (node.getAttribute('fill') || '').trim().toLowerCase();
      if (value === 'none' || value.startsWith('url(')) return;
      node.setAttribute('fill', this.selectedColor);
    });

    doc.querySelectorAll('[stroke]').forEach((node) => {
      const value = (node.getAttribute('stroke') || '').trim().toLowerCase();
      if (value === 'none' || value.startsWith('url(')) return;
      node.setAttribute('stroke', this.selectedColor);
    });

    doc.querySelectorAll('[stroke-width]').forEach((node) => {
      node.setAttribute('stroke-width', `${this.selectedStrokeWidth}`);
    });

    return new XMLSerializer().serializeToString(svgEl);
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

