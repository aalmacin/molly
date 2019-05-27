import { storiesOf } from "@storybook/angular";
import {
  NavComponent,
  NavItemComponent
} from "../../projects/molly-component-library/src/public-api";

const stories = storiesOf("Raidrin|Nav", module);

stories.add("Default", () => ({
  moduleMetadata: {
    declarations: [NavComponent, NavItemComponent]
  },
  template: `<mol-nav>
    <mol-nav-item><a href="#">Home</a></mol-nav-item>
    <mol-nav-item>Fishes</mol-nav-item>
    <mol-nav-item active="true">Guppy</mol-nav-item>
  </mol-nav>`
}));
