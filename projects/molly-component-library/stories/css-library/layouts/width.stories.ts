import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from '../typography/commonProps.util';

const stories = storiesOf('CSS Library|Layout', module);

stories.add('Width', () => ({
  props: propFactory(
    [
      { desc: 'no width', class: '' },
      { desc: 'width 10%', class: 'mol-lw-10' },
      { desc: 'width 20%', class: 'mol-lw-20' },
      { desc: 'width 30%', class: 'mol-lw-30' },
      { desc: 'width 33%', class: 'mol-lw-33' },
      { desc: 'width 34%', class: 'mol-lw-34' },
      { desc: 'width 40%', class: 'mol-lw-40' },
      { desc: 'width 50%', class: 'mol-lw-50' },
      { desc: 'width 60%', class: 'mol-lw-60' },
      { desc: 'width 70%', class: 'mol-lw-70' },
      { desc: 'width 75%', class: 'mol-lw-75' },
      { desc: 'width 80%', class: 'mol-lw-80' },
      { desc: 'width 90%', class: 'mol-lw-90' },
      { desc: 'width 100%', class: 'mol-lw-100' },
      { desc: 'width third', class: 'mol-lw-t' },
      { desc: 'width two thirds', class: 'mol-lw-tt' },
      { desc: 'width auto', class: 'mol-lw-a' },
      { desc: 'width scale 1', class: 'mol-lw-w1' },
      { desc: 'width scale 2', class: 'mol-lw-w2' },
      { desc: 'width scale 3', class: 'mol-lw-w3' },
      { desc: 'width scale 4', class: 'mol-lw-w4' },
      { desc: 'width scale 5', class: 'mol-lw-w5' }
    ],
    commonProps.longText
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div [class]="item.class">
        {{ longText }}
      </div>
    </ng-container>
  `
}));
