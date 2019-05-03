import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-flash-card',
  template: `
    <div id="flash-card-heading" class="mol-b-black mol-bc-gray-vlight p-lg">
      {{ topic }}
    </div>

    <div *ngIf="!flipped" id="mol-flash-card-front" class="mol-b-gray-dark mol-bc-green-light p-lg" (click)="flip()">
      {{ front }}
    </div>

    <div *ngIf="flipped" id="mol-flash-card-back" class="mol-b-gray-dark mol-bc-green-vlight p-lg">
      {{ back }}
    </div>
  `,
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {
  @Input()
  topic = '';

  @Input()
  front = '';

  @Input()
  back = '';

  flipped = false;

  flip() {
    this.flipped = !this.flipped;
  }
}
