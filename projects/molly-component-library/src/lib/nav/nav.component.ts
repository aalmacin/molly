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
  `
})
export class NavComponent {
  public classes = 'mol-nav mol-sbg-primary-vdark mol-lp-vs';
}
