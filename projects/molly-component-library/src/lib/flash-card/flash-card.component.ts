import { Component, Input, Output } from "@angular/core";
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

      <button class="mol-m-t-sm mol-p-sm mol-b-black mol-flash-card-show-answer mol-c-black" (click)="flip()">
        Show Answer
      </button>
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
  flipped = new BehaviorSubject<boolean>(false);

  flipped$: Observable<boolean>;

  constructor() {
    this.flipped$ = this.flipped.asObservable();
  }

  flip() {
    this.flipped.next(true);
  }
}
