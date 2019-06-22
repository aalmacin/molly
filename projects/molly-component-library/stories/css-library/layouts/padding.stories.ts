import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';

const stories = storiesOf('CSS Library|Layout/Padding', module);

stories.add('All', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-n' },
    { desc: 'very small', class: 'mol-lp-vs' },
    { desc: 'small', class: 'mol-lp-sm' },
    { desc: 'medium', class: 'mol-lp-md' },
    { desc: 'large', class: 'mol-lp-lg' },
    { desc: 'very large', class: 'mol-lp-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));

stories.add('Left', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-l-n' },
    { desc: 'very small', class: 'mol-lp-l-vs' },
    { desc: 'small', class: 'mol-lp-l-sm' },
    { desc: 'medium', class: 'mol-lp-l-md' },
    { desc: 'large', class: 'mol-lp-l-lg' },
    { desc: 'very large', class: 'mol-lp-l-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));

stories.add('Right', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-r-n' },
    { desc: 'very small', class: 'mol-lp-r-vs' },
    { desc: 'small', class: 'mol-lp-r-sm' },
    { desc: 'medium', class: 'mol-lp-r-md' },
    { desc: 'large', class: 'mol-lp-r-lg' },
    { desc: 'very large', class: 'mol-lp-r-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));

stories.add('Top', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-t-n' },
    { desc: 'very small', class: 'mol-lp-t-vs' },
    { desc: 'small', class: 'mol-lp-t-sm' },
    { desc: 'medium', class: 'mol-lp-t-md' },
    { desc: 'large', class: 'mol-lp-t-lg' },
    { desc: 'very large', class: 'mol-lp-t-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));

stories.add('Bottom', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-b-n' },
    { desc: 'very small', class: 'mol-lp-b-vs' },
    { desc: 'small', class: 'mol-lp-b-sm' },
    { desc: 'medium', class: 'mol-lp-b-md' },
    { desc: 'large', class: 'mol-lp-b-lg' },
    { desc: 'very large', class: 'mol-lp-b-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));

stories.add('X', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-x-n' },
    { desc: 'very small', class: 'mol-lp-x-vs' },
    { desc: 'small', class: 'mol-lp-x-sm' },
    { desc: 'medium', class: 'mol-lp-x-md' },
    { desc: 'large', class: 'mol-lp-x-lg' },
    { desc: 'very large', class: 'mol-lp-x-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));

stories.add('Y', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lp-y-n' },
    { desc: 'very small', class: 'mol-lp-y-vs' },
    { desc: 'small', class: 'mol-lp-y-sm' },
    { desc: 'medium', class: 'mol-lp-y-md' },
    { desc: 'large', class: 'mol-lp-y-lg' },
    { desc: 'very large', class: 'mol-lp-y-vl' }
  ]),
  template: `
    <div class="mol-lf" *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <span [class]="item.class" style="border: 1px solid black;">Item</span>
    </div>
  `
}));
