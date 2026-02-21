import { Routes } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';
import { IconsComponent } from './pages/icons/icons.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { TokensComponent } from './pages/tokens/tokens.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: 'components', component: ComponentsComponent },
  { path: 'tokens', component: TokensComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'layouts', component: LayoutsComponent }
];
