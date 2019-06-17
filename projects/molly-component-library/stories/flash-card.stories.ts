import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
  MolButtonModule,
  MolCardModule
} from 'projects/molly-component-library/src/public-api';
import { FlashCardComponent } from '../../projects/molly-component-library/src/lib/flash-card/flash-card.component';

const stories = storiesOf('Raidrin|FlashCard', module);

stories.addDecorator(
  moduleMetadata({
    imports: [MolButtonModule, MolCardModule]
  })
);

stories.add('Default', () => ({
  component: FlashCardComponent,
  props: {
    topic: text('topic', 'Lorem ipsum dolor sit amet'),
    front: text('front', 'Morbi egestas, justo ultrices lacinia consequat?'),
    back: text(
      'back',
      'Praesent dictum massa quis ligula tempus lobortis. Aliquam risus erat, tempus eget justo at, porttitor pellentesque neque.'
    )
  }
}));
