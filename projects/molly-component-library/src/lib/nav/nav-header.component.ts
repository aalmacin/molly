import { Component } from '@angular/core';

@Component({
  host: { '[class]': 'classes' },
  selector: '[mol-nav-header]',
  styles: [
    `
      :host {
        cursor: pointer;
      }

      :host ::ng-deep a {
        font-family: inherit;
        color: inherit;
        text-decoration: inherit;
      }
    `
  ],
  template: `
    <ng-content class="content"></ng-content>
  `
})
export class NavHeaderComponent {
  public classes =
    'mol-nav-header mol-tf-vl mol-tff-h mol-lp-y-sm mol-lm-r-md mol-sc-tertiary-vdark';
}
