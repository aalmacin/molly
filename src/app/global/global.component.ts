import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-global',
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

  margins = [
    'rd-m-l-vs',
    'rd-m-l-sm',
    'rd-m-l-md',
    'rd-m-l-lg',
    'rd-m-l-vl',

    'rd-m-r-vs',
    'rd-m-r-sm',
    'rd-m-r-md',
    'rd-m-r-lg',
    'rd-m-r-vl',

    'rd-m-x-vs',
    'rd-m-x-sm',
    'rd-m-x-md',
    'rd-m-x-lg',
    'rd-m-x-vl',

    'rd-m-t-vs',
    'rd-m-t-sm',
    'rd-m-t-md',
    'rd-m-t-lg',
    'rd-m-t-vl',

    'rd-m-b-vs',
    'rd-m-b-sm',
    'rd-m-b-md',
    'rd-m-b-lg',
    'rd-m-b-vl',

    'rd-m-y-vs',
    'rd-m-y-sm',
    'rd-m-y-md',
    'rd-m-y-lg',
    'rd-m-y-vl',

    'rd-m-a-vs',
    'rd-m-a-sm',
    'rd-m-a-md',
    'rd-m-a-lg',
    'rd-m-a-vl'
  ];

  paddings = [
    'rd-p-l-vs',
    'rd-p-l-sm',
    'rd-p-l-md',
    'rd-p-l-lg',
    'rd-p-l-vl',

    'rd-p-r-vs',
    'rd-p-r-sm',
    'rd-p-r-md',
    'rd-p-r-lg',
    'rd-p-r-vl',

    'rd-p-x-vs',
    'rd-p-x-sm',
    'rd-p-x-md',
    'rd-p-x-lg',
    'rd-p-x-vl',

    'rd-p-t-vs',
    'rd-p-t-sm',
    'rd-p-t-md',
    'rd-p-t-lg',
    'rd-p-t-vl',

    'rd-p-b-vs',
    'rd-p-b-sm',
    'rd-p-b-md',
    'rd-p-b-lg',
    'rd-p-b-vl',

    'rd-p-y-vs',
    'rd-p-y-sm',
    'rd-p-y-md',
    'rd-p-y-lg',
    'rd-p-y-vl',

    'rd-p-a-vs',
    'rd-p-a-sm',
    'rd-p-a-md',
    'rd-p-a-lg',
    'rd-p-a-vl'
  ];

  colors = [
    'rd-bc-red-vlight',
    'rd-bc-red-light',
    'rd-bc-red-base',
    'rd-bc-red-dark',
    'rd-bc-red-vdark',

    'rd-bc-green-vlight',
    'rd-bc-green-light',
    'rd-bc-green-base',
    'rd-bc-green-dark',
    'rd-bc-green-vdark',

    'rd-bc-blue-vlight',
    'rd-bc-blue-light',
    'rd-bc-blue-base',
    'rd-bc-blue-dark',
    'rd-bc-blue-vdark',

    'rd-bc-gray-vlight',
    'rd-bc-gray-light',
    'rd-bc-gray-base',
    'rd-bc-gray-dark',
    'rd-bc-gray-vdark',

    'rd-bc-black-base',

    'rd-bc-white-base'
  ];
}
