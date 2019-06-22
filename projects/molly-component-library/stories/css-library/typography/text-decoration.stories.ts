import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from './commonProps.util';

const stories = storiesOf('CSS Library|Typography', module);

stories.add('Text Decoration', () => ({
  props: propFactory(
    [
      { desc: 'no underline', class: 'mol-ttd-nu' },
      { desc: 'underline', class: 'mol-ttd-u' },
      { desc: 'strikethrough', class: 'mol-ttd-s' }
    ],
    commonProps.text
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{ item.class }})</span></h3>
      <div [class]="item.class">
        {{ text }}
      </div>
    </ng-container>
  `
}));
