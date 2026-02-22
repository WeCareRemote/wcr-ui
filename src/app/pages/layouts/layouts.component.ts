import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

type LayoutCategory = 'all' | 'landing' | 'product' | 'dashboard' | 'settings';

type LayoutPreview = 'projects-grid' | 'settings' | 'org-profile' | 'masonry' | 'info-cards';

type LayoutItem = {
  id: string;
  title: string;
  category: LayoutCategory;
  description: string;
  tags: string[];
  preview: LayoutPreview;
  snippet: string;
};

@Component({
  selector: 'wcr-layouts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  searchQuery = '';
  viewMode: 'grid' | 'table' = 'grid';
  activeCategory: LayoutCategory = 'all';
  selectedLayout: LayoutItem | null = null;
  panelOpen = false;
  toastMessage = '';
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  categories: { id: LayoutCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'landing', label: 'Landing' },
    { id: 'product', label: 'Product' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'settings', label: 'Settings' }
  ];

  layouts: LayoutItem[] = [
    {
      id: 'my-projects-cards-grid',
      title: 'My Projects cards grid',
      category: 'dashboard',
      description: 'Cards grid from the My Projects page with intro, spinner, and upload card.',
      tags: ['cards-grid', 'projects', 'app-project-card'],
      preview: 'projects-grid',
      snippet: `<div class="cards-grid" *ngIf="!menuItem.param">\n  <app-intro-card></app-intro-card>\n  <app-small-spinner [diameter]="30" *ngIf="!projects"></app-small-spinner>\n  <div class="project" *ngFor="let project of projects">\n    <app-project-card\n      (deleteUpdate)="confirmDeleteDialog($event)"\n      [project]="project"\n    ></app-project-card>\n  </div>\n  <div class="project project--upload">\n    <app-project-card [isUploadPlaceholder]="true"></app-project-card>\n  </div>\n</div>`
    },
    {
      id: 'user-settings-main-content',
      title: 'User settings split',
      category: 'settings',
      description: 'Main content menu with dynamic settings sections (org, skills, notifications).',
      tags: ['main-content-menu', 'settings', 'dynamic'],
      preview: 'settings',
      snippet: `<div class="settings">\n  <app-main-content-menu\n    [menuItems]="menuItems()"\n    [preselectedItem]="createOrganisationPreselected()"\n    (changeSelectedItem)="didSelectMenuItem($event)"\n  ></app-main-content-menu>\n\n  <div class="settings_content">\n    <h1 class="sectionTitle">{{ 'settings' | translate }}</h1>\n    @switch (selectedMenu) {\n      @case ('general') {\n        <app-account-information\n          [currentUser]="currentUser"\n          (onSave)="onSave($event)"\n        ></app-account-information>\n      }\n      @case ('organization') {\n        <app-org-information\n          [organization]="organization()"\n          (organizationChange)="organization.set($event)"\n          [currentUser]="currentUser"\n          (onSave)="onSave($event)"\n        ></app-org-information>\n      }\n    }\n  </div>\n</div>`
    },
    {
      id: 'public-org-profile',
      title: 'Public organization profile',
      category: 'landing',
      description: 'Organization landing layout with header, skills, FAQ, and contact sections.',
      tags: ['organization', 'landing', 'faq', 'contact'],
      preview: 'org-profile',
      snippet: `<section class="organization__header">\n  <div class="organization__header-texts">\n    <h2 class="organization__claim">{{ organizationData().organization?.claim }}</h2>\n    <p class="organization__subtitle">{{ organizationData().organization?.about_short }}</p>\n  </div>\n  <div class="btn-group center">\n    <app-button btnUIType="neutral">{{ 'heading.website-button' | translate }}</app-button>\n    <app-button btnUIType="primary">{{ 'heading.blog-button' | translate }}</app-button>\n  </div>\n</section>\n\n<section class="organization__skills">\n  <div class="organization__skills-heading">\n    <h3 class="organization__skills-title">{{ 'get-help.title' | translate }}</h3>\n    <p class="organization__subtitle">{{ 'get-help.subtitle' | translate }}</p>\n  </div>\n  <app-skill-filter [skills]="organizationData().org_skills"></app-skill-filter>\n  <app-ice-breakers-list class="cards-grid-default"></app-ice-breakers-list>\n</section>`
    },
    {
      id: 'newsfeed-masonry',
      title: 'Newsfeed masonry',
      category: 'product',
      description: 'Masonry columns with feed items and typed welcome card.',
      tags: ['masonry', 'newsfeed', 'feed'],
      preview: 'masonry',
      snippet: `<div class="newsfeed">\n  <app-main-content-menu [menuItems]="menuItems"></app-main-content-menu>\n\n  <div class="masonry" appLoadMoreOnscroll (loadMoreEvt)="loadMore()">\n    <div class="masonry__column" *ngFor="let column of cards">\n      @if (!noContent && !menuItem.param) {\n        <app-typing-card [config]="typingCardConfig"></app-typing-card>\n      }\n      <app-newsfeed-item\n        *ngFor="let feedback of column"\n        [currentUser]="currentUser"\n        [feedback]="feedback"\n      ></app-newsfeed-item>\n    </div>\n  </div>\n</div>`
    },
    {
      id: 'project-info-cards',
      title: 'Project info cards',
      category: 'dashboard',
      description: 'Two-column info card layout with skill grid for project metadata.',
      tags: ['project-info', 'cards', 'skills'],
      preview: 'info-cards',
      snippet: `<div class="project-info-cards">\n  <app-project-info-card-single\n    *ngFor="let card of projectCards"\n    [projectInfoCard]="card"\n    [class]="card.cardType"\n  ></app-project-info-card-single>\n</div>\n\n<div class="skills" *ngIf="skillCards?.length">\n  <app-project-info-card-single\n    *ngFor="let card of skillCards"\n    [projectInfoCard]="card"\n    [class]="card.cardType"\n  ></app-project-info-card-single>\n</div>`
    }
  ];

  get filteredLayouts(): LayoutItem[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.layouts.filter((layout) => {
      const matchesCategory = this.activeCategory === 'all' || layout.category === this.activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      const haystack = `${layout.title} ${layout.description} ${layout.tags.join(' ')} ${layout.category}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  get totalLayouts(): number {
    return this.layouts.length;
  }

  openPanel(layout: LayoutItem): void {
    this.selectedLayout = layout;
    this.panelOpen = true;
  }

  closePanel(): void {
    this.panelOpen = false;
  }

  copySnippet(layout: LayoutItem): void {
    this.copyText(layout.snippet);
    this.showToast(`Copied snippet: ${layout.title}`);
  }

  copyCssToken(layout: LayoutItem): void {
    const token = `--wcr-layout-${toSlug(layout.title)}`;
    this.copyText(`${token}: ${layout.id};`);
    this.showToast(`Copied CSS token: ${token}`);
  }

  downloadLayouts(): void {
    const payload = {
      layouts: this.layouts
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'wcr-layouts.json';
    anchor.click();
    URL.revokeObjectURL(url);
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
