import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="mol-card mol-tf-lg">
      <div
        class="mol-sb-secondary-light-x mol-sb-secondary-light-t mol-sbg-secondary-vdark mol-sc-white mol-tta-c mol-lp-sm mol-tff-h"
      >
        {{ heading }}
      </div>
      <div
        class="mol-sb-secondary-light-x mol-sb-secondary-light-b mol-sbg-white mol-tta-c mol-lp-lg"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input()
  public heading = '';
}
