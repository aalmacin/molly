import { storiesOf } from '@storybook/angular';
import { commonProps, propFactory } from './propFactory.util';

const measureStories = storiesOf('CSS Library|Typography', module);

measureStories.add('Line Height', () => ({
  props: propFactory(
    [
      { desc: 'none', class: '' },
      { desc: 'solid', class: 'mol-tlh-s' },
      { desc: 'title', class: 'mol-tlh-t' },
      { desc: 'copy', class: 'mol-tlh-c' }
    ],
    commonProps.longText,
    commonProps.measure
  ),
  template: `
    <h1>All Line Height</h1>
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{item.class}})</span></h3>
      <div class="{{measure}} {{ item.class }}">
        {{ longText }}
      </div>
      <br>
    </ng-container>
  `
}));
