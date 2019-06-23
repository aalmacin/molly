import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-info-card',
  styleUrls: ['./info-card.component.scss'],
  template: `
    <div
      class="info-card mol-sb-secondary mol-lp-x-lg mol-lp-t-vs mol-tlh-s mol-lp-b-lg mol-lf mol-lf-fd-c mol-lf-jc-sb"
    >
      <h3 class="mol-lm-b-md">{{ heading }}</h3>

      <div class="card-img">
        <ng-content select="img"></ng-content>
      </div>

      <div class="card-content">
        <ng-content></ng-content>
      </div>

      <div class="card-btn mol-tta-c">
        <ng-content select="[molBtn]"></ng-content>
      </div>
    </div>
  `
})
export class InfoCardComponent {
  @Input()
  public heading = '';
}
