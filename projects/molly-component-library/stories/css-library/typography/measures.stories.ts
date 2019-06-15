import { storiesOf } from "@storybook/angular";
import { text, radios } from '@storybook/addon-knobs';

const measureStories = storiesOf("CSS Library|Typography", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet leo leo. Sed pretium arcu tellus, ut tristique felis imperdiet facilisis.";

measureStories.add("Measures", () => ({
  props: {
    fontSize: radios(
      "Font Size",
      {
        small: "mol-f-sm",
        normal: "",
        large: "mol-f-lg",
        'very large': "mol-f-vl",
      },
      "mol-f-sm"
    ),
    items: [
      { desc: "none", class: "" },
      { desc: "narrow", class: "mol-mea-n" },
      { desc: "normal", class: "mol-mea" },
      { desc: "wide", class: "mol-mea-w" }
    ],
    loremipsum: text('Text', loremipsum)
  },
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{ item.class }})</span></h3>
      <div class="{{ fontSize }} {{ item.class }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>
  `
}));