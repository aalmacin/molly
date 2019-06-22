import { storiesOf } from '@storybook/angular';
import { propFactory } from '../propFactory.util';
import { commonProps } from './commonProps.util';

const stories = storiesOf('CSS Library|Typography', module);

stories.add('Font Family', () => ({
  props: propFactory([], commonProps.text, commonProps.longText),
  template: `
    <h1>Headers (mol-tff-h) - Roboto Slab</h1>
    <h1>Header 1: {{ text }}</h1>
    <h2>Header 2: {{ text }}</h2>
    <h3>Header 3: {{ text }}</h3>
    <h4>Header 4: {{ text }}</h4>
    <h5>Header 5: {{ text }}</h5>
    <h6>Header 6: {{ text }}</h6>

    <h1>body (mol-tff-t) - questrial</h1>
    <p>Body: {{ longText }}</p>
  `
}));
