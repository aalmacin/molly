import { storiesOf } from "@storybook/angular";

const measureStories = storiesOf("CSS Library/Typography/Measures", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet leo leo. Sed pretium arcu tellus, ut tristique felis imperdiet facilisis. Aliquam vitae nisl sollicitudin, congue ipsum id, maximus ligula. Donec commodo, orci sit amet accumsan maximus, magna dolor maximus tortor, ultricies ultricies diam eros eu lacus.";

measureStories.add("Normal Text", () => ({
  props: {
    measures: ["mea-n", "mea", "mea-w"],
    loremipsum
  },
  template: `
    <ng-container *ngFor="let measure of measures">
      <div class="mol-{{ measure }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>
  `
}));

measureStories.add("Very large", () => ({
  props: {
    measures: ["mea-n", "mea", "mea-w"],
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  template: `
    <ng-container *ngFor="let measure of measures">
      <div class="mol-f-vl mol-{{ measure }}">
        {{ message }}
      </div>
      <br>
    </ng-container>
  `
}));