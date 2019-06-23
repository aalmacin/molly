import { CommonModule } from '@angular/common';
import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ImageJumbotronComponent, MolButtonModule } from '../src/public-api';

const stories = storiesOf('Raidrin|Jumbotron', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [ImageJumbotronComponent],
    imports: [CommonModule, MolButtonModule]
  })
);

stories.add('Image Jumbotron', () => ({
  component: ImageJumbotronComponent,
  props: {
    heading: 'Lorem Ipsum',
    imgSrc: '/assets/wood.jpeg',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla nisl nec dui hendrerit mattis. In venenatis a diam ut pulvinar. Aliquam sed sodales massa, lacinia commodo ante.',
    textLeft: boolean('Is Text Left', true),
    actionText: text('Action Text', 'View'),
    actionUrl: '#'
  }
}));
