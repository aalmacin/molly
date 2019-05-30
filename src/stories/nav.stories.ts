import { storiesOf } from "@storybook/angular";
import {
  NavComponent,
  NavItemComponent
} from "../../projects/molly-component-library/src/public-api";
import { NavHeaderComponent } from 'projects/molly-component-library/src/lib/nav/nav-header.component';

const stories = storiesOf("Raidrin|Nav", module);

stories.add("Default", () => ({
  moduleMetadata: {
    declarations: [NavComponent, NavItemComponent, NavHeaderComponent]
  },
  template: `<mol-nav>
    <mol-nav-header>Fish</mol-nav-header>
    <mol-nav-item><a href="#">Home</a></mol-nav-item>
    <mol-nav-item><a>Fishes</a></mol-nav-item>
    <mol-nav-item active="true"><a>Guppy</a></mol-nav-item>
    <mol-nav-item><a class="active">Platy</a></mol-nav-item>
  </mol-nav>`
}));
