import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import {
  ButtonSize,
  ButtonType
} from 'projects/molly-component-library/src/lib/button/button';
import { ButtonComponent } from 'projects/molly-component-library/src/public-api';

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
    <mol-btn [type]="type" [size]="size">{{ text }}</mol-btn>
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
    <mol-btn [type]="type" [size]="size">
      <a href="#hello">Hello</a>
    </mol-btn>
  `
}));
