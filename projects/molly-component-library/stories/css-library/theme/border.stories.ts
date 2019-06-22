import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from '../typography/commonProps.util';

const stories = storiesOf('CSS Library|Theme/Border', module);

stories.add('All Colors', () => ({
  props: propFactory(
    [
      { desc: 'black', class: 'mol-sb-black' },
      { desc: 'white', class: 'mol-sb-white' },
      { desc: 'primary very light', class: 'mol-sb-primary-vlight' },
      { desc: 'primary light', class: 'mol-sb-primary-light' },
      { desc: 'primary', class: 'mol-sb-primary' },
      { desc: 'primary dark', class: 'mol-sb-primary-dark' },
      { desc: 'primary very dark', class: 'mol-sb-primary-vdark' },
      { desc: 'secondary very light', class: 'mol-sb-secondary-vlight' },
      { desc: 'secondary light', class: 'mol-sb-secondary-light' },
      { desc: 'secondary', class: 'mol-sb-secondary' },
      { desc: 'secondary dark', class: 'mol-sb-secondary-dark' },
      { desc: 'secondary very dark', class: 'mol-sb-secondary-vdark' },
      { desc: 'tertiary very light', class: 'mol-sb-tertiary-vlight' },
      { desc: 'tertiary light', class: 'mol-sb-tertiary-light' },
      { desc: 'tertiary', class: 'mol-sb-tertiary' },
      { desc: 'tertiary dark', class: 'mol-sb-tertiary-dark' },
      { desc: 'tertiary very dark', class: 'mol-sb-tertiary-vdark' }
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

stories.add('All Thickness', () => ({
  props: propFactory(
    [
      { desc: 'normal', class: 'mol-sb-primary' },
      { desc: 'thick', class: 'mol-sb-thick-primary' },
      { desc: 'very thick', class: 'mol-sb-vthick-primary' }
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

stories.add('All Directions', () => ({
  props: propFactory(
    [
      { desc: 'all', class: 'mol-sb-primary' },
      { desc: 'left', class: 'mol-sb-primary-l' },
      { desc: 'right', class: 'mol-sb-primary-r' },
      { desc: 'horizontal', class: 'mol-sb-primary-x' },
      { desc: 'top', class: 'mol-sb-primary-t' },
      { desc: 'bottom', class: 'mol-sb-primary-b' },
      { desc: 'vertical', class: 'mol-sb-primary-y' }
    ],
    commonProps.fontSize,
    commonProps.longText
  ),
  template: `
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} ({{item.class}})</h3>
      <div [class]="item.class">
        <span [class]="fontSize">{{ longText }}</span>
      </div>
    </ng-container>
  `
}));
