import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="mol-card">
      <div
        class="mol-sb-secondary-light-x mol-sb-secondary-light-t mol-sbg-secondary-light mol-sc-white mol-tta-c mol-lp-sm mol-tff-h"
      >
        {{ heading }}
      </div>
      <div
        class="mol-sb-secondary-light-x mol-sb-secondary-light-b mol-sbg-white mol-tta-c mol-lp-lg"
      >
        {{ content }}
      </div>
    </div>
  `
})
export class CardComponent {
  @Input()
  public heading = '';

  @Input()
  public content = '';
}
