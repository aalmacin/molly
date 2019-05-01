import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-global',
  template: `
    <div *ngIf="showMargin">
      <h1>Margin</h1>
      <div *ngFor="let margin of margins" class="margins">
        <div>
          <span>-</span>
          <br />
          <span>|</span>
          <span class="{{ margin }}">X</span>
          <span>|</span>
          {{ margin }}
          <br />
          <span>-</span>
        </div>
      </div>
    </div>

    <div *ngIf="showPadding">
      <h1>Padding</h1>
      <div *ngFor="let padding of paddings" class="paddings">
        <div class="{{ padding }} padding">X {{ padding }}</div>
      </div>
    </div>

    <div *ngIf="showPalette">
      <h1>Colors</h1>
      <div *ngFor="let color of colors" class="colors">
        <div class="{{ color }} color">X {{ color }}</div>
      </div>
    </div>

    <div *ngIf="showBorders">
      <h1>Borders</h1>
      <div *ngFor="let border of borders" class="borders">
        <div class="mol-m-t-vl mol-p-lg {{ border }} border">X {{ border }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent {
  @Input()
  showMargin = false;

  @Input()
  showPadding = false;

  @Input()
  showPalette = false;

  @Input()
  showBorders = false;

  margins = [
    'mol-m-l-vs',
    'mol-m-l-sm',
    'mol-m-l-md',
    'mol-m-l-lg',
    'mol-m-l-vl',

    'mol-m-r-vs',
    'mol-m-r-sm',
    'mol-m-r-md',
    'mol-m-r-lg',
    'mol-m-r-vl',

    'mol-m-x-vs',
    'mol-m-x-sm',
    'mol-m-x-md',
    'mol-m-x-lg',
    'mol-m-x-vl',

    'mol-m-t-vs',
    'mol-m-t-sm',
    'mol-m-t-md',
    'mol-m-t-lg',
    'mol-m-t-vl',

    'mol-m-b-vs',
    'mol-m-b-sm',
    'mol-m-b-md',
    'mol-m-b-lg',
    'mol-m-b-vl',

    'mol-m-y-vs',
    'mol-m-y-sm',
    'mol-m-y-md',
    'mol-m-y-lg',
    'mol-m-y-vl',

    'mol-m-a-vs',
    'mol-m-a-sm',
    'mol-m-a-md',
    'mol-m-a-lg',
    'mol-m-a-vl'
  ];

  paddings = [
    'mol-p-l-vs',
    'mol-p-l-sm',
    'mol-p-l-md',
    'mol-p-l-lg',
    'mol-p-l-vl',

    'mol-p-r-vs',
    'mol-p-r-sm',
    'mol-p-r-md',
    'mol-p-r-lg',
    'mol-p-r-vl',

    'mol-p-x-vs',
    'mol-p-x-sm',
    'mol-p-x-md',
    'mol-p-x-lg',
    'mol-p-x-vl',

    'mol-p-t-vs',
    'mol-p-t-sm',
    'mol-p-t-md',
    'mol-p-t-lg',
    'mol-p-t-vl',

    'mol-p-b-vs',
    'mol-p-b-sm',
    'mol-p-b-md',
    'mol-p-b-lg',
    'mol-p-b-vl',

    'mol-p-y-vs',
    'mol-p-y-sm',
    'mol-p-y-md',
    'mol-p-y-lg',
    'mol-p-y-vl',

    'mol-p-a-vs',
    'mol-p-a-sm',
    'mol-p-a-md',
    'mol-p-a-lg',
    'mol-p-a-vl'
  ];

  colors = [
    'mol-bc-red-vlight',
    'mol-bc-red-light',
    'mol-bc-red-base',
    'mol-bc-red-dark',
    'mol-bc-red-vdark',

    'mol-bc-green-vlight',
    'mol-bc-green-light',
    'mol-bc-green-base',
    'mol-bc-green-dark',
    'mol-bc-green-vdark',

    'mol-bc-blue-vlight',
    'mol-bc-blue-light',
    'mol-bc-blue-base',
    'mol-bc-blue-dark',
    'mol-bc-blue-vdark',

    'mol-bc-gray-vlight',
    'mol-bc-gray-light',
    'mol-bc-gray-base',
    'mol-bc-gray-dark',
    'mol-bc-gray-vdark',

    'mol-bc-black-base',

    'mol-bc-white-base'
  ];

  borders = [
    'mol-b-black',
    'mol-b-thick-black',
    'mol-b-vthick-black'
  ]
}
