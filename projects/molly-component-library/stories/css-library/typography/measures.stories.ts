import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from './commonProps.util';

const measureStories = storiesOf('CSS Library|Typography', module);

measureStories.add('Measures', () => ({
  props: propFactory(
    [
      { desc: 'none', class: '' },
      { desc: 'narrow', class: 'mol-tm-n' },
      { desc: 'normal', class: 'mol-tm' },
      { desc: 'wide', class: 'mol-tm-w' }
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
