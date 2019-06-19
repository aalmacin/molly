import { Component } from '@angular/core';

@Component({
  host: { '[class]': 'classes' },
  selector: 'nav[mol-nav]',
  styleUrls: ['./nav.component.scss'],
  template: `
    <ng-content select="[mol-nav-header]"></ng-content>
    <div class="mol-nav-items">
      <ng-content select="[mol-nav-item]"></ng-content>
    </div>
    <div class="mol-nav-items-end">
      <ng-content select="[mol-nav-item-end]"></ng-content>
    </div>
  `,
})
export class NavComponent {
  public classes =
    'mol-nav mol-b-secondary-vlight mol-bc-secondary-vlight mol-p-sm mol-m-b-sm';
}
