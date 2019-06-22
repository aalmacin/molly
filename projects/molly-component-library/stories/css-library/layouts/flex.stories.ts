import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';

const stories = storiesOf('CSS Library|Flex', module);

stories.add('Flex', () => ({
  props: propFactory([
    { desc: 'No Flex', class: '' },
    { desc: 'flex', class: 'mol-lf' }
  ]),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div [class]="item.class">
        <div style="border: 1px solid black; padding: 5px;">Item 1</div>
        <div style="border: 1px solid black; padding: 5px;">Item 2</div>
        <div style="border: 1px solid black; padding: 5px;">Item 3</div>
        <div style="border: 1px solid black; padding: 5px;">Item 4</div>
        <div style="border: 1px solid black; padding: 5px;">Item 5</div>
      </div>
    </ng-container>
  `
}));
