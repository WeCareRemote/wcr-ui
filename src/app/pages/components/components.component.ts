import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { COMPONENT_REGISTRY, ComponentRegistryItem } from './components.registry';

@Component({
  selector: 'wcr-components',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  searchQuery = '';
  activeTab: 'docs' | 'controls' | 'actions' | 'interactions' = 'controls';
  viewMode: 'gallery' | 'registry' = 'gallery';
  components: ComponentRegistryItem[] = COMPONENT_REGISTRY;
  selectedId = COMPONENT_REGISTRY[0]?.selector ?? '';

  get filteredComponents(): ComponentRegistryItem[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.components.filter((item) => {
      if (!query) return true;
      return (
        item.selector.toLowerCase().includes(query) ||
        item.path.toLowerCase().includes(query)
      );
    });
  }

  get selectedComponent(): ComponentRegistryItem {
    return this.components.find((item) => item.selector === this.selectedId) || this.components[0];
  }

  get controls(): { name: string; type: string; defaultValue: string }[] {
    return this.selectedComponent.inputs.map((name) => ({
      name,
      type: 'input()',
      defaultValue: '—'
    }));
  }

  get hasControls(): boolean {
    return this.controls.length > 0;
  }
}

