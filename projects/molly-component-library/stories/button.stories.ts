import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { ButtonComponent, ButtonSize, ButtonType } from '../src/public-api';

const stories = storiesOf('Raidrin|Button', module);

stories.add('Default', () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  props: {
    size: select(
      'size',
      [ButtonSize.SMALL, ButtonSize.MEDIUM, ButtonSize.LARGE],
      ButtonSize.MEDIUM
    ),
    text: text('text', 'Hello Button'),
    type: select(
      'type',
      [
        ButtonType.PRIMARY,
        ButtonType.SECONDARY,
        ButtonType.TERTIARY,
        ButtonType.DEFAULT
      ],
      ButtonType.PRIMARY
    ),
  },
  template: `
    <button molBtn [type]="type" [size]="size">{{ text }}</button>
  `
}));

stories.add('With Link', () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  props: {
    size: select(
      'size',
      [ButtonSize.SMALL, ButtonSize.MEDIUM, ButtonSize.LARGE],
      ButtonSize.MEDIUM
    ),
    text: text('text', 'Hello Button'),
    type: select(
      'type',
      [
        ButtonType.PRIMARY,
        ButtonType.SECONDARY,
        ButtonType.TERTIARY,
        ButtonType.DEFAULT
      ],
      ButtonType.PRIMARY
    ),
  },
  template: `
    <button molBtn [type]="type" [size]="size">
      <a href="#hello">Hello</a>
    </button>
  `
}));
