import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'mol-flash-card',
  styleUrls: ['./flash-card.component.scss'],
  template: `
    <div class="mol-flash-card mol-tc mol-fd">
      <mol-card
        heading="{{ topic }}"
        content="{{ (flipped$ | async) ? back : front }}"
        class="mol-flash-card-container"
      ></mol-card>

      <div class="mol-flash-card-difficulty-group" *ngIf="flipped$ | async">
        <mol-btn
          class="mol-flash-card-difficulty mol-flash-card-easy"
          type="default"
          (click)="easyClicked()"
          >Easy</mol-btn
        >
        <mol-btn
          class="mol-flash-card-difficulty mol-flash-card-hard"
          type="default"
          (click)="hardClicked()"
          >Hard</mol-btn
        >
      </div>

      <mol-btn
        class="mol-flash-card-show-answer"
        type="primary"
        size="medium"
        (click)="flip()"
        >Show Answer</mol-btn
      >
    </div>
  `,
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
