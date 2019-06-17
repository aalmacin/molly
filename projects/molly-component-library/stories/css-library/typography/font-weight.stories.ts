import { storiesOf } from '@storybook/angular';
import { commonProps, propFactory } from './propFactory.util';

const stories = storiesOf('CSS Library|Typography', module);

stories.add('Font Weight', () => ({
  props: propFactory(
    [
      { desc: 'normal', class: 'mol-tfw-n' },
      { desc: 'medium', class: 'mol-tfw-m' },
      { desc: 'bold', class: 'mol-tfw-b' }
    ],
    commonProps.fontSize,
    commonProps.text
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }}</h3>
      <div [class]="item.class">
        <span [class]="fontSize">{{ text }}</span>
      </div>
    </ng-container>
  `
}));
