import { storiesOf } from "@storybook/angular";
import { radios } from "@storybook/addon-knobs";

const measureStories = storiesOf("CSS Library/Typography/Tracking", module);
const loremipsum = "LOREM IPSUM DOLOR SIT AMET";

measureStories.add("all", () => ({
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
      { desc: "tracked", class: "mol-tr" },
      { desc: "tight", class: "mol-tr-t" },
      { desc: "mega", class: "mol-tr-m" }
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
