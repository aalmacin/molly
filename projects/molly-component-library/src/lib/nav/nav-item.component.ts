import { Component } from '@angular/core';

@Component({
  host: { '[class]': 'classes' },
  selector: '[mol-nav-item]',
  styleUrls: ['./nav-item.component.scss'],
  template: `
    <ng-content class="content"></ng-content>
  `
})
export class NavItemComponent {
  public classes =
    'mol-nav-item mol-ft mol-l-nl mol-p-y-sm mol-m-r-md mol-c-tertiary-dark';
}
