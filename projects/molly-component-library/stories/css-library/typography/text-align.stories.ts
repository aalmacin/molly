import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from './commonProps.util';

const stories = storiesOf('CSS Library|Typography', module);

stories.add('Text Align', () => ({
  props: propFactory(
    [
      { desc: 'left', class: 'mol-tta-l' },
      { desc: 'center', class: 'mol-tta-c' },
      { desc: 'right', class: 'mol-tta-r' }
    ],
    commonProps.fontSize,
    commonProps.text
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div [class]="item.class">
        <span [class]="fontSize">{{ text }}</span>
      </div>
    </ng-container>
  `
}));
