import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'mol-flash-card',
  styleUrls: ['./flash-card.component.scss'],
  template: `
    <div
      class="mol-flash-card mol-tta-c mol-lf mol-lf-fd-c mol-lf-jc-c mol-lf-fw"
    >
      <mol-card
        heading="{{ topic }}"
        content="{{ (flipped$ | async) ? back : front }}"
        class="mol-flash-card-container"
      ></mol-card>

      <div class="mol-flash-card-difficulty-group" *ngIf="flipped$ | async">
        <button
          molBtn
          class="mol-flash-card-difficulty mol-flash-card-easy mol-lw-50"
          type="secondary"
          (click)="easyClicked()"
        >
          Easy
        </button>
        <button
          molBtn
          class="mol-flash-card-difficulty mol-flash-card-hard mol-lw-50"
          type="secondary"
          (click)="hardClicked()"
        >
          Hard
        </button>
      </div>

      <button
        *ngIf="!(flipped$ | async)"
        molBtn
        class="mol-flash-card-show-answer mol-lw-100"
        type="secondary"
        size="lg"
        (click)="flip()"
      >
        Show Answer
      </button>
    </div>
  `
})
export class FlashCardComponent {
  @Input()
  public topic = '';

  @Input()
  public front = '';

  @Input()
  public back = '';

  @Output()
  public done = new BehaviorSubject<boolean>(false);

  @Output()
  public flipped = new BehaviorSubject<boolean>(false);

  @Output()
  public easy = new EventEmitter();

  @Output()
  public hard = new EventEmitter();

  public flipped$: Observable<boolean>;
  public done$: Observable<boolean>;

  constructor() {
    this.flipped$ = this.flipped.asObservable();
    this.done$ = this.done.asObservable();
  }

  public flip() {
    this.flipped.next(true);
  }

  public easyClicked() {
    this.easy.emit();
    this.finish();
  }

  public hardClicked() {
    this.hard.emit();
    this.finish();
  }

  public finish() {
    this.done.next(true);
  }
}
