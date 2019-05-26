import { storiesOf } from "@storybook/angular";
import { text, select } from "@storybook/addon-knobs";
import { ButtonComponent } from "projects/molly-component-library/src/public-api";
import { ButtonType } from "projects/molly-component-library/src/lib/button/ButtonType";

const stories = storiesOf("Raidrin|Button", module);

stories.add("Default", () => ({
  component: ButtonComponent,
  props: {
    text: text("text", "Hello Button"),
    type: select("type", [
      ButtonType.PRIMARY,
      ButtonType.SECONDARY,
      ButtonType.TERTIARY
    ])
  }
}));
