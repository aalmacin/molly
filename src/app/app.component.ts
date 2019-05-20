import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mol-flash-card topic="Philosophy" front="What is the meaning of life?" back="42" (flipped)="flipped($event)"></mol-flash-card>
  `,
  styles: []
})
export class AppComponent {
  public flipped(flippedState) {
    console.log('It flipped', flippedState);
  }
}
