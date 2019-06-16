import { storiesOf } from "@storybook/angular";
import { text, radios } from "@storybook/addon-knobs";
import { propFactory, commonProps } from "./propFactory.util";

const stories = storiesOf("CSS Library|Typography", module);

stories.add("Font Weight", () => ({
  props: propFactory(
    [
      { desc: "normal", class: "mol-fw-n" },
      { desc: "medium", class: "mol-fw-m" },
      { desc: "bold", class: "mol-fw-b" }
    ],
    commonProps.fontSize,
    commonProps.text
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }}</h3>
      <div [class]="item.class">
        <span [class]="fontSize">{{ text }}</span>
      </div>
    </ng-container>
  `
}));
