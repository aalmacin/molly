import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-flash-card',
  template: `
    <div id="flash-card-heading" class="rd-bc-gray-vlight p-lg">
      {{ topic }}
    </div>

    <div *ngIf="!flipped" id="rd-flash-card-front" class="rd-bc-green-light p-lg" (click)="flip()">
      {{ front }}
    </div>
    <div *ngIf="flipped" id="rd-flash-card-back" class="">
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
