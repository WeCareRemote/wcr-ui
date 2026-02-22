import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

type ControlItem = {
  name: string;
  type: string;
  description: string;
  control: 'select' | 'boolean' | 'text';
  options?: string[];
};

type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  preview: 'button' | 'input' | 'search';
  snippet: string;
  controls: ControlItem[];
};

@Component({
  selector: 'wcr-components',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  searchQuery = '';
  selectedId = 'button';
  toastMessage = '';
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  items: ShowcaseItem[] = [
    {
      id: 'button',
      title: 'Button',
      description: 'Primary / neutral / subtle button component from WCR UI kit.',
      tags: ['app-button', 'primary', 'neutral', 'subtle'],
      preview: 'button',
      snippet: `<app-button btnUIType="primary" size="medium" type="button">Primary</app-button>\n<app-button btnUIType="neutral" size="medium" type="button">Neutral</app-button>\n<app-button btnUIType="subtle" size="medium" type="button">Subtle</app-button>`,
      controls: [
        {
          name: 'btnUIType',
          type: 'string',
          description: 'Defines the visual hierarchy of the button.',
          control: 'select',
          options: ['primary', 'neutral', 'subtle']
        },
        {
          name: 'size',
          type: 'string',
          description: 'Controls the button size.',
          control: 'select',
          options: ['small', 'medium', 'large']
        },
        {
          name: 'dangerBtn',
          type: 'boolean',
          description: 'Applies destructive (danger) styling.',
          control: 'boolean'
        },
        {
          name: 'iconBtn',
          type: 'boolean',
          description: 'Optimizes layout for icon-only buttons.',
          control: 'boolean'
        },
        {
          name: 'rounded',
          type: 'boolean',
          description: 'Applies a fully rounded (pill) shape.',
          control: 'boolean'
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disables user interaction.',
          control: 'boolean'
        }
      ]
    },
    {
      id: 'input',
      title: 'Input',
      description: 'Form input component used across settings and forms.',
      tags: ['app-input', 'forms', 'validation'],
      preview: 'input',
      snippet: `<app-input\n  [control]="form.get('email')"\n  inputName="email"\n  placeholder="you@company.com"\n  type="email"\n  label="Email"\n></app-input>`,
      controls: [
        {
          name: 'control',
          type: 'AbstractControl | null',
          description: 'Reactive form control instance.',
          control: 'text'
        },
        {
          name: 'inputName',
          type: 'string',
          description: 'Input name attribute.',
          control: 'text'
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text.',
          control: 'text'
        },
        {
          name: 'type',
          type: 'string',
          description: 'Input type, e.g. text, email.',
          control: 'text'
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disables user interaction.',
          control: 'boolean'
        }
      ]
    },
    {
      id: 'search-input',
      title: 'Search input',
      description: 'Search field component used in lists and headers.',
      tags: ['app-search-input', 'search', 'filter'],
      preview: 'search',
      snippet: `<app-search-input placeholder="Find items"></app-search-input>`,
      controls: [
        {
          name: 'placeholder',
          type: 'string',
          description: 'Input placeholder.',
          control: 'text'
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disables search input.',
          control: 'boolean'
        },
        {
          name: 'square',
          type: 'boolean',
          description: 'Square input variant.',
          control: 'boolean'
        }
      ]
    }
  ];

  get filteredItems(): ShowcaseItem[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return this.items;
    return this.items.filter((item) => {
      const haystack = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  get selected(): ShowcaseItem {
    return this.items.find((item) => item.id === this.selectedId) ?? this.items[0];
  }

  copySnippet(item: ShowcaseItem): void {
    this.copyText(item.snippet);
    this.showToast(`Copied snippet: ${item.title}`);
  }

  copyToken(item: ShowcaseItem): void {
    const token = `--wcr-component-${toSlug(item.title)}`;
    this.copyText(`${token}: ${item.id};`);
    this.showToast(`Copied CSS token: ${token}`);
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
