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

      <mol-btn class="mol-flash-card-show-answer" text="Show Answer" (click)="flip()"></mol-btn>
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
