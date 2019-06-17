import { storiesOf } from "@storybook/angular";
import { text } from "@storybook/addon-knobs";
import { propFactory, commonProps } from "./propFactory.util";

const stories = storiesOf("CSS Library|Typography", module);

stories.add("Type Scale", () => ({
  props: propFactory(
    [
      { desc: "small", class: "mol-tf-sm" },
      { desc: "base", class: "" },
      { desc: "large", class: "mol-tf-lg" },
      { desc: "very large", class: "mol-tf-vl" }
    ],
    commonProps.text
  ),
  template: `
    <h3>Smallest to Largest</h3>
    <ng-container *ngFor="let item of items">
      <span [class]="item.class">
        [ {{ item.class || 'base' }} ]
      </span>
    </ng-container>

    <hr>

    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{ item.class }})</span></h3>
      <div [class]="item.class">
        {{ text }}
        <span class="mol-t-uc">{{ text }}</span>
      </div>
    </ng-container>
  `
}));
