import { storiesOf } from "@storybook/angular";
import { text } from '@storybook/addon-knobs';

const stories = storiesOf("CSS Library/Typography/TypeScale", module);

stories.add("Type Scale", () => ({
  props: {
    items: [
      { desc: "small", class: "mol-f-sm" },
      { desc: "base", class: "" },
      { desc: "large", class: "mol-f-lg" },
      { desc: "very large", class: "mol-f-vl" }
    ],
    text: text('Text', 'the quick brown fox jumps over the lazy dog')
  },
  template: `
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
