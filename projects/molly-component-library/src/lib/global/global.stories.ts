import { storiesOf } from '@storybook/angular';
import { GlobalComponent } from './global.component';
import { boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Raidrin|Global', module);

stories.add('Default', () => ({
  component: GlobalComponent,
  props: {
    showMargin: boolean('showMargin', true),
    showPadding: boolean('showPadding', true),
  }
}));

stories.add('Margin', () => ({
  component: GlobalComponent,
  props: {
    showMargin: boolean('showMargin', true)
  }
}));

stories.add('Padding', () => ({
  component: GlobalComponent,
  props: {
    showPadding: boolean('showPadding', true)
  }
}));

stories.add('Palette', () => ({
  component: GlobalComponent,
  props: {
    showPalette: boolean('showPalette', true)
  }
}));

