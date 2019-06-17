import { storiesOf } from "@storybook/angular";
import { text } from "@storybook/addon-knobs";
import { propFactory, commonProps } from "./propFactory.util";

const stories = storiesOf("CSS Library|Typography", module);

stories.add("Text Transform", () => ({
  props: propFactory(
    [
      { desc: "none", class: "" },
      { desc: "uppercase", class: "mol-ttt-u" },
      { desc: "lowercase", class: "mol-ttt-l" },
      { desc: "capitalize", class: "mol-ttt-c" }
    ],
    commonProps.text
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{ item.class }})</span></h3>
      <div [class]="item.class">
        {{ text }}
      </div>
    </ng-container>
  `
}));
