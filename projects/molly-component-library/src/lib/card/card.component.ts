import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="mol-card mol-tf-lg">
      <div
        class="mol-sb-primary-light-x mol-sb-primary-light-t mol-sbg-primary-vdark mol-sc-white mol-tta-c mol-lp-sm mol-tff-h"
      >
        {{ heading }}
      </div>
      <div
        class="mol-sb-primary-light-x mol-sb-primary-light-t mol-sbg-white mol-tta-c mol-lp-lg mol-sb-n-b"
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
