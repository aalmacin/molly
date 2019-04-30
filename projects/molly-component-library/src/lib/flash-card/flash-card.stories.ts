import { storiesOf } from '@storybook/angular';
import { FlashCardComponent } from './flash-card.component';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Raidrin|FlashCard', module);

stories.add('Default', () => ({
  component: FlashCardComponent,
  props: {
    topic: text('topic', 'Lorem ipsum dolor sit amet'),
    front: text(
      'front',
      'Morbi egestas, justo ultrices lacinia consequat?'
    ),
    back: text(
      'back',
      'Praesent dictum massa quis ligula tempus lobortis. Aliquam risus erat, tempus eget justo at, porttitor pellentesque neque.'
    ),
  }
}));
