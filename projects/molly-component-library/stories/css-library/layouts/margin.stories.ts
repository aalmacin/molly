import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';

const stories = storiesOf('CSS Library|Layout/Margin', module);

stories.add('All', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-n' },
    { desc: 'very small', class: 'mol-lm-vs' },
    { desc: 'small', class: 'mol-lm-sm' },
    { desc: 'medium', class: 'mol-lm-md' },
    { desc: 'large', class: 'mol-lm-lg' },
    { desc: 'very large', class: 'mol-lm-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));

stories.add('Left', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-l-n' },
    { desc: 'very small', class: 'mol-lm-l-vs' },
    { desc: 'small', class: 'mol-lm-l-sm' },
    { desc: 'medium', class: 'mol-lm-l-md' },
    { desc: 'large', class: 'mol-lm-l-lg' },
    { desc: 'very large', class: 'mol-lm-l-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));

stories.add('Right', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-r-n' },
    { desc: 'very small', class: 'mol-lm-r-vs' },
    { desc: 'small', class: 'mol-lm-r-sm' },
    { desc: 'medium', class: 'mol-lm-r-md' },
    { desc: 'large', class: 'mol-lm-r-lg' },
    { desc: 'very large', class: 'mol-lm-r-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));

stories.add('Top', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-t-n' },
    { desc: 'very small', class: 'mol-lm-t-vs' },
    { desc: 'small', class: 'mol-lm-t-sm' },
    { desc: 'medium', class: 'mol-lm-t-md' },
    { desc: 'large', class: 'mol-lm-t-lg' },
    { desc: 'very large', class: 'mol-lm-t-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));

stories.add('Bottom', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-b-n' },
    { desc: 'very small', class: 'mol-lm-b-vs' },
    { desc: 'small', class: 'mol-lm-b-sm' },
    { desc: 'medium', class: 'mol-lm-b-md' },
    { desc: 'large', class: 'mol-lm-b-lg' },
    { desc: 'very large', class: 'mol-lm-b-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));

stories.add('X', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-x-n' },
    { desc: 'very small', class: 'mol-lm-x-vs' },
    { desc: 'small', class: 'mol-lm-x-sm' },
    { desc: 'medium', class: 'mol-lm-x-md' },
    { desc: 'large', class: 'mol-lm-x-lg' },
    { desc: 'very large', class: 'mol-lm-x-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));

stories.add('Y', () => ({
  props: propFactory([
    { desc: 'none', class: 'mol-lm-y-n' },
    { desc: 'very small', class: 'mol-lm-y-vs' },
    { desc: 'small', class: 'mol-lm-y-sm' },
    { desc: 'medium', class: 'mol-lm-y-md' },
    { desc: 'large', class: 'mol-lm-y-lg' },
    { desc: 'very large', class: 'mol-lm-y-vl' }
  ]),
  template: `
    <div *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div style="border: 1px solid red">
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
        <div [class]="item.class" style="border: 1px solid black;display: inline-block;width:50px;height:20px;">Item</div>
      </div>
    </div>
  `
}));
