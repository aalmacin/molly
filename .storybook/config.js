import { configure, addDecorator } from '@storybook/angular';
import requireContext from 'require-context.macro';

import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.ts
const req = requireContext('../projects/', true, /\.stories\.ts$/);

import '!style-loader!css-loader!sass-loader!../projects/molly-component-library/src/lib/styles/globals.scss';

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);
addDecorator(withKnobs)
addDecorator(withA11y)

configure(loadStories, module);