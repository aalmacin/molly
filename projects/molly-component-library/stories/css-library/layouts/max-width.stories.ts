import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from '../typography/commonProps.util';

const stories = storiesOf('CSS Library|Layout', module);

stories.add('Max Width', () => ({
  props: propFactory(
    [
      { desc: 'no max width', class: '' },
      { desc: 'max width scale 1', class: 'mol-lmw-1' },
      { desc: 'max width scale 2', class: 'mol-lmw-2' },
      { desc: 'max width scale 3', class: 'mol-lmw-3' },
      { desc: 'max width scale 4', class: 'mol-lmw-4' },
      { desc: 'max width scale 5', class: 'mol-lmw-5' },
      { desc: 'max width scale 6', class: 'mol-lmw-6' },
      { desc: 'max width scale 7', class: 'mol-lmw-7' },
      { desc: 'max width scale 8', class: 'mol-lmw-8' },
      { desc: 'max width scale 9', class: 'mol-lmw-9' },
      { desc: 'max width scale 100', class: 'mol-lmw-100' }
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
