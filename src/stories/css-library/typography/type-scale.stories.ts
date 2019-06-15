import { storiesOf } from "@storybook/angular";

const stories = storiesOf("CSS Library/Typography/TypeScale", module);

stories.add("Type Scale", () => ({
  props: {},
  template: `
    <span class="mol-f-sm">[ mol-f-sm ]</span>
    <span>[ base ]</span>
    <span class="mol-f-lg">[ mol-f-lg ]</span>
    <span class="mol-f-vl">[ mol-f-vl ]</span>
  `
}));