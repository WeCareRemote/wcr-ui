import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ColorToken = {
  name: string;
  value: string;
};

type ScaleToken = {
  name: string;
  value: string;
};

@Component({
  selector: 'wcr-tokens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.scss'
})
export class TokensComponent {
  colors: ColorToken[] = [
    { name: 'Brand 900', value: '#1e1e1e' },
    { name: 'Brand 800', value: '#2c2c2c' },
    { name: 'Brand 700', value: '#383838' },
    { name: 'Brand 500', value: '#757575' },
    { name: 'Neutral 900', value: '#303030' },
    { name: 'Neutral 700', value: '#5a5a5a' },
    { name: 'Neutral 300', value: '#cdcdcd' },
    { name: 'Neutral 100', value: '#f3f3f3' },
    { name: 'Positive', value: '#14ae5c' },
    { name: 'Warning', value: '#e8b931' },
    { name: 'Danger', value: '#ec221f' },
    { name: 'Info', value: '#00affe' }
  ];

  spacing: ScaleToken[] = [
    { name: 'Space 100', value: '0.4rem' },
    { name: 'Space 200', value: '0.8rem' },
    { name: 'Space 300', value: '1.2rem' },
    { name: 'Space 400', value: '1.6rem' },
    { name: 'Space 500', value: '2rem' },
    { name: 'Space 700', value: '2.8rem' },
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
}


