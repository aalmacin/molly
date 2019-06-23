import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ImageJumbotronComponent, MolJumbotronModule } from '../src/public-api';

const stories = storiesOf('Raidrin|Jumbotron', module);

stories.addDecorator(
  moduleMetadata({
    declarations: [ImageJumbotronComponent]
  })
);

stories.add('Image Jumbotron', () => ({
  component: ImageJumbotronComponent,
  props: {}
}));
