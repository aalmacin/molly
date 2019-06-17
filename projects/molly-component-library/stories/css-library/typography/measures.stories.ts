import { storiesOf } from "@storybook/angular";
import { text, radios } from '@storybook/addon-knobs';
import { propFactory, commonProps } from './propFactory.util';

const measureStories = storiesOf("CSS Library|Typography", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet leo leo. Sed pretium arcu tellus, ut tristique felis imperdiet facilisis.";

measureStories.add("Measures", () => ({
  props: propFactory(
    [
      { desc: "none", class: "" },
      { desc: "narrow", class: "mol-tm-n" },
      { desc: "normal", class: "mol-tm" },
      { desc: "wide", class: "mol-tm-w" }
    ],
    commonProps.fontSize,
    commonProps.longText
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{ item.class }})</span></h3>
      <div class="{{ fontSize }} {{ item.class }}">
        {{ longText }}
      </div>
      <br>
    </ng-container>
  `
}));