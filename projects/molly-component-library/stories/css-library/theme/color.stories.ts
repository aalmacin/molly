import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from '../typography/commonProps.util';

const stories = storiesOf('CSS Library|Theme', module);

stories.add('Font Color', () => ({
  props: propFactory(
    [
      { desc: 'black', class: 'mol-sc-black' },
      { desc: 'white', class: 'mol-sc-white' },
      { desc: 'primary very light', class: 'mol-sc-primary-vlight' },
      { desc: 'primary light', class: 'mol-sc-primary-light' },
      { desc: 'primary', class: 'mol-sc-primary' },
      { desc: 'primary dark', class: 'mol-sc-primary-dark' },
      { desc: 'primary very dark', class: 'mol-sc-primary-vdark' },
      { desc: 'secondary very light', class: 'mol-sc-secondary-vlight' },
      { desc: 'secondary light', class: 'mol-sc-secondary-light' },
      { desc: 'secondary', class: 'mol-sc-secondary' },
      { desc: 'secondary dark', class: 'mol-sc-secondary-dark' },
      { desc: 'secondary very dark', class: 'mol-sc-secondary-vdark' },
      { desc: 'tertiary very light', class: 'mol-sc-tertiary-vlight' },
      { desc: 'tertiary light', class: 'mol-sc-tertiary-light' },
      { desc: 'tertiary', class: 'mol-sc-tertiary' },
      { desc: 'tertiary dark', class: 'mol-sc-tertiary-dark' },
      { desc: 'tertiary very dark', class: 'mol-sc-tertiary-vdark' }
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
