import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-img-jumbotron',
  styleUrls: ['./image-jumbotron.component.scss'],
  template: `
    <div
      class="{{
        textLeft ? 'mol-lf-fd-r' : 'mol-lf-fd-rr'
      }} mol-lf mol-sbg-secondary-vlight"
    >
      <div class="mol-lf mol-lf-jc-sb mol-lf-fd-c mol-lp-lg mol-lw-60">
        <h3>{{ heading }}</h3>
        <p>
          {{ text }}
        </p>
        <a
          molBtn
          class="mol-tta-c"
          *ngIf="actionText"
          type="primary"
          [href]="actionUrl"
          >{{ actionText }}</a
        >
      </div>
      <img class="mol-lf mol-lw-40" [src]="imgSrc" alt="An image" />
    </div>
  `
})
export class ImageJumbotronComponent {
  @Input()
  public heading = '';

  @Input()
  public imgSrc = '';

  @Input()
  public text = '';

  @Input()
  public textLeft = true;

  @Input()
  public actionText = '';

  @Input()
  public actionUrl = '';
}
