import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from '../typography/commonProps.util';

const stories = storiesOf('CSS Library|Theme', module);

stories.add('Background Color', () => ({
  props: propFactory(
    [
      { desc: 'black', class: 'mol-sbg-black' },
      { desc: 'white', class: 'mol-sbg-white' },
      { desc: 'primary very light', class: 'mol-sbg-primary-vlight' },
      { desc: 'primary light', class: 'mol-sbg-primary-light' },
      { desc: 'primary', class: 'mol-sbg-primary' },
      { desc: 'primary dark', class: 'mol-sbg-primary-dark' },
      { desc: 'primary very dark', class: 'mol-sbg-primary-vdark' },
      { desc: 'secondary very light', class: 'mol-sbg-secondary-vlight' },
      { desc: 'secondary light', class: 'mol-sbg-secondary-light' },
      { desc: 'secondary', class: 'mol-sbg-secondary' },
      { desc: 'secondary dark', class: 'mol-sbg-secondary-dark' },
      { desc: 'secondary very dark', class: 'mol-sbg-secondary-vdark' },
      { desc: 'tertiary very light', class: 'mol-sbg-tertiary-vlight' },
      { desc: 'tertiary light', class: 'mol-sbg-tertiary-light' },
      { desc: 'tertiary', class: 'mol-sbg-tertiary' },
      { desc: 'tertiary dark', class: 'mol-sbg-tertiary-dark' },
      { desc: 'tertiary very dark', class: 'mol-sbg-tertiary-vdark' }
    ],
    commonProps.fontSize,
    commonProps.text
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div class="{{item.class}} mol-lp-lg"></div>
    </ng-container>
  `
}));
