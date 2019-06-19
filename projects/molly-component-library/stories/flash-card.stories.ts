import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
  FlashCardComponent,
  MolButtonModule,
  MolCardModule
} from '../src/public-api';

const stories = storiesOf('Raidrin|FlashCard', module);

stories.addDecorator(
  moduleMetadata({
    imports: [MolButtonModule, MolCardModule]
  })
);

stories.add('Default', () => ({
  component: FlashCardComponent,
  props: {
    back: text(
      'back',
      'Praesent dictum massa quis ligula tempus lobortis. Aliquam risus erat, tempus eget justo at, porttitor pellentesque neque.'
    ),
    front: text('front', 'Morbi egestas, justo ultrices lacinia consequat?'),
    topic: text('topic', 'Lorem ipsum dolor sit amet')
  }
}));
