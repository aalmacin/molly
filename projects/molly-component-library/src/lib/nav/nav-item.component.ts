import { Component } from '@angular/core';

@Component({
  selector: '[mol-nav-item]',
  host: { '[class]': 'classes' },
  template: `
    <ng-content class="content"></ng-content>
  `,
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  public classes =
    'mol-nav-item mol-ft mol-l-nl mol-p-y-sm mol-m-r-md mol-c-tertiary-dark';
}
