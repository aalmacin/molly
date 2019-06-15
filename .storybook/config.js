import { configure, addDecorator } from "@storybook/angular";
import requireContext from "require-context.macro";

import { withNotes } from "@storybook/addon-notes";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

// automatically import all files ending in *.stories.ts
const req = requireContext("../projects/", true, /\.stories\.ts$/);

import "!style-loader!css-loader!sass-loader!../projects/molly-component-library/src/lib/styles/globals.scss";
import { addParameters } from "@storybook/angular";
import { create } from "@storybook/theming";

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const palette = {
  primary: {
    vlight: "#91ed77",
    light: "#77cc62",
    base: "#5ea84e",
    dark: "#3f7233",
    vdark: "#39632f"
  },
  secondary: {
    vlight: "#cce8ea",
    light: "#a9d5e0",
    base: "#6fadbc",
    dark: "#6492a0",
    vdark: "#5d7f8c"
  },
  tertiary: {
    vlight: "#d3a479",
    light: "#a37d5a",
    base: "#7c5f42",
    dark: "#56412e",
    vdark: "#35281c"
  },
  white: { base: "#fcfcfc" },
  black: { base: "#111111" }
};

addParameters({
  options: {
    panelPosition: "right",

    theme: create({
      base: "light",
      brandTitle: "Molly",
      brandImage: '/assets/molly-brand.png',

      appBg: palette.primary.base,
      appBorderColor: palette.tertiary.dark,
      appBorderRadius: 4,

      fontBase: '"Questrial", sans-serif',
      fontCode: "monospace",

      appContentBg: palette.white.base,
      colorPrimary: palette.primary.dark,
      colorSecondary: palette.secondary.dark,

      textColor: palette.black.base,
      textInverseColor: palette.secondary.vlight,

      barTextColor: palette.white.base,
      barSelectedColor: palette.secondary.light,
      barBg: palette.primary.dark,

      inputBg: palette.white.base,
      inputBorder: palette.black.base,
      inputTextColor: palette.black.base,
      inputBorderRadius: 5
    })
  }
});

addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withA11y);

configure(loadStories, module);
