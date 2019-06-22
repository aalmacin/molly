import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';

const stories = storiesOf('CSS Library|Layout', module);

stories.add('Height', () => ({
  props: propFactory([
    { desc: 'no height', class: '' },
    { desc: 'height 25%', class: 'mol-lh-25' },
    { desc: 'height 50%', class: 'mol-lh-50' },
    { desc: 'height 75%', class: 'mol-lh-75' },
    { desc: 'height 100%', class: 'mol-lh-100' },
    { desc: 'screen height 25%', class: 'mol-lh-vh25' },
    { desc: 'screen height 50%', class: 'mol-lh-vh50' },
    { desc: 'screen height 75%', class: 'mol-lh-vh75' },
    { desc: 'screen height 100%', class: 'mol-lh-vh100' },
    { desc: 'height auto', class: 'mol-lh-a' },
    { desc: 'height inherit', class: 'mol-lh-i' },
    { desc: 'height scale 1', class: 'mol-lh-h1' },
    { desc: 'height scale 2', class: 'mol-lh-h2' },
    { desc: 'height scale 3', class: 'mol-lh-h3' },
    { desc: 'height scale 4', class: 'mol-lh-h4' },
    { desc: 'height scale 5', class: 'mol-lh-h5' }
  ]),
  template: `
    <div *ngFor="let item of items" [class]="item.class" style="border: 1px solid black;">
      {{ item.desc }} ({{item.class}})
    </div>
  `
}));
