import { storiesOf } from "@storybook/angular";

const measureStories = storiesOf("CSS Library|Typography/Measures", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet leo leo. Sed pretium arcu tellus, ut tristique felis imperdiet facilisis.";

measureStories.add("All Sizes", () => ({
  props: {
    measures: ["mea-n", "mea", "mea-w"],
    loremipsum
  },
  template: `

    <h1>Small</h1>
    <ng-container *ngFor="let measure of measures">
      <h2>mol-{{ measure }}</h2>
      <div class="mol-f-sm mol-{{ measure }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>

    <h1>Normal</h1>
    <ng-container *ngFor="let measure of measures">
      <h2>mol-{{ measure }}</h2>
      <div class="mol-{{ measure }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>

    <h1>Large</h1>
    <ng-container *ngFor="let measure of measures">
      <h2>mol-{{ measure }}</h2>
      <div class="mol-f-lg mol-{{ measure }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>

    <h1>Very Large</h1>
    <ng-container *ngFor="let measure of measures">
      <h2>mol-{{ measure }}</h2>
      <div class="mol-f-vl mol-{{ measure }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>
  `
}));