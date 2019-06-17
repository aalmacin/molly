import { storiesOf } from "@storybook/angular";
import { propFactory, commonProps } from './propFactory.util';

const stories = storiesOf("CSS Library|Typography", module);

stories.add("Font Styles", () => ({
  props: propFactory(
    [
      { desc: "normal", class: "mol-tfs-n" },
      { desc: "italic", class: "mol-tfs-i" }
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
