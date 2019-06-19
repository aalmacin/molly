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
  `,
})
export class NavHeaderComponent {
  public classes =
    'mol-nav-header mol-l-nl mol-fs-vl mol-fh mol-p-y-sm mol-m-r-md mol-c-tertiary-dark';
}
