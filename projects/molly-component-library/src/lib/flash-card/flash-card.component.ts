import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "mol-flash-card",
  template: `
    <div class="mol-flash-card mol-tc mol-fd">
      <mol-card
        heading="{{ topic }}"
        content="{{ (flipped$ | async) ? back : front }}"
        class="mol-flash-card-container"
      ></mol-card>

      <div class="mol-flash-card-difficulty-group" *ngIf="flipped$ | async">
        <mol-btn class="mol-flash-card-difficulty mol-flash-card-easy" type="default" (click)="easyClicked()">Easy</mol-btn>
        <mol-btn class="mol-flash-card-difficulty mol-flash-card-hard" type="default" (click)="hardClicked()">Hard</mol-btn>
      </div>

      <mol-btn
        class="mol-flash-card-show-answer"
        type="primary"
        size="medium"
        (click)="flip()"
      >Show Answer</mol-btn>
    </div>
  `,
  styleUrls: ["./flash-card.component.scss"]
})
export class FlashCardComponent {
  @Input()
  topic = "";

  @Input()
  front = "";

  @Input()
  back = "";

  @Output()
  done = new BehaviorSubject<boolean>(false);

  @Output()
  flipped = new BehaviorSubject<boolean>(false);

  @Output()
  easy = new EventEmitter();

  @Output()
  hard = new EventEmitter();

  flipped$: Observable<boolean>;
  done$: Observable<boolean>;

  constructor() {
    this.flipped$ = this.flipped.asObservable();
    this.done$ = this.done.asObservable();
  }

  flip() {
    this.flipped.next(true);
  }

  easyClicked() {
    this.easy.emit();
    this.finish();
  }

  hardClicked() {
    this.hard.emit();
    this.finish();
  }

  finish() {
    this.done.next(true);
  }
}
