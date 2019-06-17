import { storiesOf } from "@storybook/angular";
import { text, radios } from "@storybook/addon-knobs";
import { propFactory, commonProps } from "./propFactory.util";

const stories = storiesOf("CSS Library|Typography", module);

stories.add("Vertical Align", () => ({
  props: propFactory(
    [
      { desc: "top", class: "mol-tv-t" },
      { desc: "bottom", class: "mol-tv-b" },
      { desc: "middle", class: "mol-tv-m" }
    ]
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <p>{{ item.desc }} ({{ item.class }})</p>
      <div style="padding: 5px;">
        <div [class]="item.class" style="display: inline-block; width: 40px; height: 40px; border: 1px solid black; margin: 5px; padding: 5px;">
          Molly
        </div>
        <div [class]="item.class" style="display: inline-block; width: 60px; height: 60px; border: 1px solid black; margin: 5px; padding: 5px;">
          Molly
        </div>
        <div [class]="item.class" style="display: inline-block; width: 80px; height: 80px; border: 1px solid black; margin: 5px; padding: 5px;">
          Molly
        </div>
        <br>
      </div>
    </ng-container>
  `
}));
