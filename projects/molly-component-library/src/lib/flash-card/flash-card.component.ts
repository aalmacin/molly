import { Component, Input, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "mol-flash-card",
  template: `
    <div class="mol-flash-card mol-tc mol-fd">
      <div class="mol-flash-card-container">
        <div
          id="mol-flash-card-heading"
          class="mol-b-green mol-bc-green-light mol-c-black mol-p-sm mol-fh"
        >
          {{ topic }}
        </div>

        <div
          id="mol-flash-card-content"
          class="mol-b-green mol-bc-green-vlight p-lg"
          (click)="flip()"
        >
          {{ (flipped$ | async) ? back : front }}
        </div>
      </div>
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
