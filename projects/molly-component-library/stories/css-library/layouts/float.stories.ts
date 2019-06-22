import { storiesOf } from '@storybook/angular';

const stories = storiesOf('CSS Library|Layout/Float', module);

stories.add('All', () => ({
  props: {},
  template: `
    <h3>Float</h3>
    <div style="border: 2px solid red">
      <div style="border: 1px solid black" class="mol-lp-md mol-lfl-l">Float Left (mol-lfl-l)</div>
      <div style="border: 1px solid black" class="mol-lp-md mol-lfl-r">Float Right (mol-lfl-r)</div>
    </div>
  `
}));

stories.add('Clearfix', () => ({
  props: {},
  template: `
    <h3>Float</h3>
    <div style="border: 2px solid red" class="mol-lfl-cf">
      <div style="border: 1px solid black" class="mol-lp-md mol-lfl-l">Float Left (mol-lfl-l)</div>
      <div style="border: 1px solid black" class="mol-lp-md mol-lfl-r">Float Right (mol-lfl-r)</div>
    </div>
  `
}));
