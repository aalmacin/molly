import { Component } from '@angular/core';

@Component({
  host: { '[class]': 'classes' },
  selector: '[mol-nav-item-end]',
  styleUrls: ['./nav-item.component.scss'],
  template: `
    <ng-content class="content"></ng-content>
  `
})
export class NavItemEndComponent {
  public classes =
    'mol-nav-item mol-tff-t mol-lp-y-sm mol-lm-r-md mol-sc-tertiary-vdark';
}
