import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <mol-flash-card
      topic="Philosophy"
      front="What is the meaning of life?"
      back="42"
      (flipped)="flipped($event)"
      (easy)="easyClicked()"
      (hard)="hardClicked()"
      (done)="hideAll($event)"
    ></mol-flash-card>
    <mol-nav>
      <mol-nav-header>Hello</mol-nav-header>
    </mol-nav>
  `,
  styles: []
})
export class AppComponent {
  public flipped(flippedState) {
    console.log("It flipped", flippedState);
  }

  public easyClicked() {
    console.log("Clicked Easy");
  }

  public hardClicked() {
    console.log("Clicked Hard");
  }

  public hideAll(done) {
    if (done) {
      console.log("Hide All");
    }
  }
}
