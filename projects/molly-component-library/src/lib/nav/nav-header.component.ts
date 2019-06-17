import { Component } from '@angular/core';

@Component({
  selector: '[mol-nav-header]',
  host: { '[class]': 'classes' },
  template: `
    <ng-content class="content"></ng-content>
  `,
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
  ]
})
export class NavHeaderComponent {
  public classes =
    'mol-nav-header mol-l-nl mol-fs-vl mol-fh mol-p-y-sm mol-m-r-md mol-c-tertiary-dark';
}
