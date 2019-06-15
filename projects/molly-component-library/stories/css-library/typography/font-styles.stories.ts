import { storiesOf } from "@storybook/angular";
import { text, radios } from '@storybook/addon-knobs';

const stories = storiesOf("CSS Library|Typography", module);

stories.add("Font Styles", () => ({
  props: {
    items: [
      { desc: "normal", class: "mol-fs-n" },
      { desc: "italic", class: "mol-fs-i" }
    ],
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
    text: text('Text', 'HELLO WORLD hello world')
  },
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }}</h3>
      <div [class]="item.class">
        <span [class]="fontSize">{{ text }}</span>
      </div>
    </ng-container>
  `
}));
