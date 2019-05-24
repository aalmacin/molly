import { storiesOf } from "@storybook/angular";
import { text } from "@storybook/addon-knobs";
import { ButtonComponent } from 'projects/molly-component-library/src/public-api';

const stories = storiesOf("Raidrin|Button", module);

stories.add("Default", () => ({
  component: ButtonComponent,
  props: {
    text: text("text", "Hello Button"),
  }
}));
