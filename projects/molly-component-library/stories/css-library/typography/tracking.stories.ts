import { storiesOf } from "@storybook/angular";
import { propFactory, commonProps } from "./propFactory.util";

const measureStories = storiesOf("CSS Library|Typography", module);

measureStories.add("Tracking", () => ({
  props: propFactory(
    [
      { desc: "none", class: "" },
      { desc: "tracked", class: "mol-ttr" },
      { desc: "tight", class: "mol-ttr-t" },
      { desc: "mega", class: "mol-ttr-m" }
    ],
    commonProps.heading,
    commonProps.fontSize
  ),
  template: `
    <h1>All Tracking (Letter Spacing)</h1>
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{item.class}})</span></h3>
      <div class="{{ fontSize }} {{ item.class }}">
        {{ heading }}
      </div>
      <br>
    </ng-container>
  `
}));
