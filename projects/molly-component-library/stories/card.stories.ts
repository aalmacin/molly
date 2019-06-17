import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { CardComponent } from '../../projects/molly-component-library/src/lib/card/card.component';

const stories = storiesOf('Raidrin|Card', module);

stories.add('Default', () => ({
  component: CardComponent,
  props: {
    heading: text('heading', 'Lorem ipsum dolor sit amet'),
    content: text(
      'content',
      'Morbi egestas, justo ultrices lacinia consequat, tortor nisl malesuada mi, convallis posuere elit orci at risus.'
    )
  }
}));
