import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { CardComponent } from '../src/public-api';

const stories = storiesOf('Raidrin|Card', module);

stories.add('Default', () => ({
  moduleMetadata: {
    declarations: [CardComponent]
  },
  template: `
    <mol-card [heading]="heading">
      {{ content }}
    </mol-card>
  `,
  props: {
    content: text(
      'content',
      'Morbi egestas, justo ultrices lacinia consequat, tortor nisl malesuada mi, convallis posuere elit orci at risus.'
    ),
    heading: text('heading', 'Lorem ipsum dolor sit amet')
  }
}));
