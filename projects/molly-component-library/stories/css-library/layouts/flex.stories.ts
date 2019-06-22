import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';

const stories = storiesOf('CSS Library|Layout/Flex', module);

stories.add('Enable Flex', () => ({
  props: propFactory([
    { desc: 'no flex', class: '' },
    { desc: 'flex', class: 'mol-lf' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div [class]="item.class">
        <div style="border: 1px solid black" class="mol-lp-md">Item 1</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 2</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 3</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 4</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 5</div>
      </div>
    </ng-container>
  `
}));

stories.add('Flex Auto', () => ({
  props: propFactory([
    { desc: 'not auto', class: '' },
    { desc: 'auto', class: 'mol-lf-a' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf {{item.class}}">
        <div style="border: 1px solid black" class="mol-lp-md">Item 1</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 2 -</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 3 --</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 4 ---</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 5 ----</div>
      </div>
    </ng-container>
  `
}));

stories.add('Flex Wrap', () => ({
  props: propFactory([
    { desc: 'not wrapped', class: '' },
    { desc: 'wrap', class: 'mol-lf-fw' },
    { desc: 'wrap reverse', class: 'mol-lf-fw-r' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf {{item.class}}" style="width: 300px">
        <div style="border: 1px solid black" class="mol-lp-md">Item 1</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 2</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 3</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 4</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 5</div>
      </div>
    </ng-container>
  `
}));

stories.add('Flex Direction', () => ({
  props: propFactory([
    { desc: 'row', class: 'mol-lf-fd-r' },
    { desc: 'column', class: 'mol-lf-fd-c' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf {{item.class}}" style="width: 300px">
        <div style="border: 1px solid black" class="mol-lp-md">Item 1</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 2</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 3</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 4</div>
        <div style="border: 1px solid black" class="mol-lp-md">Item 5</div>
      </div>
    </ng-container>
  `
}));

stories.add('Align Items', () => ({
  props: propFactory([
    { desc: 'start', class: 'mol-lf-ai-s' },
    { desc: 'end', class: 'mol-lf-ai-e' },
    { desc: 'center', class: 'mol-lf-ai-c' },
    { desc: 'baseline', class: 'mol-lf-ai-b' },
    { desc: 'stretch', class: 'mol-lf-ai-str' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf {{item.class}}">
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md mol-tf-sm">Item 1 <br> Message</div>
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md mol-tf-lg">Item 2 <br> Message</div>
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md mol-tf-vl">Item 3 <br> Message</div>
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md">Item 4 <br> Message</div>
      </div>
    </ng-container>
  `
}));

stories.add('Align Self', () => ({
  props: propFactory([
    { desc: 'start', class: 'mol-lf-as-s' },
    { desc: 'end', class: 'mol-lf-as-e' },
    { desc: 'center', class: 'mol-lf-as-c' },
    { desc: 'baseline', class: 'mol-lf-as-b' },
    { desc: 'stretch', class: 'mol-lf-as-str' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf">
        <div style="border: 1px solid black;" class="{{ item.class }} mol-ttd-u mol-lp-md mol-tf-sm">Item 1 <br> Message</div>
        <div style="border: 1px solid black;" class="{{ item.class }} mol-ttd-u mol-lp-md mol-tf-lg">Item 2 <br> Message</div>
        <div style="border: 1px solid black;" class="{{ item.class }} mol-ttd-u mol-lp-md mol-tf-vl">Item 3 <br> Message</div>
        <div style="border: 1px solid black;" class="{{ item.class }} mol-ttd-u mol-lp-md">Item 4 <br> Message</div>
      </div>
    </ng-container>
  `
}));

stories.add('Align Content', () => ({
  props: propFactory([
    { desc: 'start', class: 'mol-lf-ac-s' },
    { desc: 'end', class: 'mol-lf-ac-e' },
    { desc: 'center', class: 'mol-lf-ac-c' },
    { desc: 'space-between', class: 'mol-lf-ac-sb' },
    { desc: 'space-around', class: 'mol-lf-ac-sa' },
    { desc: 'stretch', class: 'mol-lf-ac-str' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf mol-lf-fw {{item.class}}" style="width: 300px; height: 300px; border: 1px solid red">
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md mol-tf-sm">Item 1 <br> Message</div>
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md mol-tf-lg">Item 2 <br> Message</div>
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md mol-tf-vl">Item 3 <br> Message</div>
        <div style="border: 1px solid black;" class="mol-ttd-u mol-lp-md">Item 4 <br> Message</div>
      </div>
    </ng-container>
  `
}));

stories.add('Justify Content', () => ({
  props: propFactory([
    { desc: 'start', class: 'mol-lf-jc-s' },
    { desc: 'end', class: 'mol-lf-jc-e' },
    { desc: 'center', class: 'mol-lf-jc-c' },
    { desc: 'space-between', class: 'mol-lf-jc-sb' },
    { desc: 'space-around', class: 'mol-lf-jc-sa' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf {{item.class}}">
        <div class="mol-lp-lg" style="border: 1px solid black;">Item 1</div>
        <div class="mol-lp-lg" style="border: 1px solid black;">Item 2</div>
        <div class="mol-lp-lg" style="border: 1px solid black;">Item 3</div>
      </div>
    </ng-container>
  `
}));

stories.add('Flex Order', () => ({
  props: propFactory([
    { desc: 'none', class: '' },
    { desc: 'order 0', class: 'mol-lf-fo-0' },
    { desc: 'order 1', class: 'mol-lf-fo-1' },
    { desc: 'order 2', class: 'mol-lf-fo-2' },
    { desc: 'order 3', class: 'mol-lf-fo-3' },
    { desc: 'order 4', class: 'mol-lf-fo-4' },
    { desc: 'order 5', class: 'mol-lf-fo-5' },
    { desc: 'order 6', class: 'mol-lf-fo-6' },
    { desc: 'order 7', class: 'mol-lf-fo-7' },
    { desc: 'order 8', class: 'mol-lf-fo-8' },
    { desc: 'order 9', class: 'mol-lf-fo-9' },
    { desc: 'order last', class: 'mol-lf-fo-last' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="mol-lf ">
        <div class="mol-lp-vs {{item.class}}" style="border: 3px solid green;">Move this</div>
        <div class="mol-lp-vs mol-lf-fo-0" style="border: 1px solid black;">Item 1</div>
        <div class="mol-lp-vs mol-lf-fo-1" style="border: 1px solid black;">Item 2</div>
        <div class="mol-lp-vs mol-lf-fo-2" style="border: 1px solid black;">Item 3</div>
        <div class="mol-lp-vs mol-lf-fo-3" style="border: 1px solid black;">Item 4</div>
        <div class="mol-lp-vs mol-lf-fo-4" style="border: 1px solid black;">Item 5</div>
        <div class="mol-lp-vs mol-lf-fo-5" style="border: 1px solid black;">Item 6</div>
        <div class="mol-lp-vs mol-lf-fo-6" style="border: 1px solid black;">Item 7</div>
        <div class="mol-lp-vs mol-lf-fo-7" style="border: 1px solid black;">Item 8</div>
        <div class="mol-lp-vs mol-lf-fo-8" style="border: 1px solid black;">Item 9</div>
        <div class="mol-lp-vs mol-lf-fo-9" style="border: 1px solid black;">Item 10</div>
      </div>
    </ng-container>
  `
}));
