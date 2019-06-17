import { storiesOf } from "@storybook/angular";
import { radios } from "@storybook/addon-knobs";

const measureStories = storiesOf("CSS Library|Typography", module);
const loremipsum = "LOREM IPSUM DOLOR SIT AMET";

measureStories.add("Tracking", () => ({
  props: {
    loremipsum,
    fontSize: radios(
      "Font Size",
      {
        large: "lg",
        "very large": "vl"
      },
      "lg"
    ),
    items: [
      { desc: "none", class: "" },
      { desc: "tracked", class: "mol-ttr" },
      { desc: "tight", class: "mol-ttr-t" },
      { desc: "mega", class: "mol-ttr-m" }
    ]
  },
  template: `
    <h1>All Tracking (Letter Spacing)</h1>
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{item.class}})</span></h3>
      <div class="mol-f-{{ fontSize }} {{ item.class }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>
  `
}));
