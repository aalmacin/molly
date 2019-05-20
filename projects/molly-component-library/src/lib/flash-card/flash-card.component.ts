import { Component, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'mol-flash-card',
  template: `
    <div id="flash-card-heading" class="mol-b-black mol-bc-gray-vlight p-lg">
      {{ topic }}
    </div>

    <div *ngIf="!(flipped$ | async)" id="mol-flash-card-front" class="mol-b-gray-dark mol-bc-green-light p-lg" (click)="flip()">
      {{ front }}
    </div>

    <div *ngIf="(flipped$ | async)" id="mol-flash-card-back" class="mol-b-gray-dark mol-bc-green-vlight p-lg">
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

  @Output()
  flipped = new BehaviorSubject<boolean>(false);

  flipped$: Observable<boolean>;

  constructor() {
    this.flipped$ = this.flipped.asObservable();
  }

  flip() {
    this.flipped.next(true);
  }
}
