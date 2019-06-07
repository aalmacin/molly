import { storiesOf } from "@storybook/angular";
import { NavComponent } from 'projects/molly-component-library/src/lib/nav/nav.component';
import { NavItemComponent } from 'projects/molly-component-library/src/lib/nav/nav-item.component';
import { NavHeaderComponent } from 'projects/molly-component-library/src/lib/nav/nav-header.component';
import { NavItemEndComponent } from 'projects/molly-component-library/src/lib/nav/nav-item-end.component';

const stories = storiesOf("Raidrin|Nav", module);

stories.add("Default", () => ({
  moduleMetadata: {
    declarations: [
      NavComponent,
      NavItemComponent,
      NavHeaderComponent,
      NavItemEndComponent
    ]
  },
  template: `<nav mol-nav>
    <div mol-nav-header>Fish</div>
    <div mol-nav-item><a href="#">Home</a></div>
    <div mol-nav-item><a>Fishes</a></div>
    <div mol-nav-item><a>Guppy</a></div>
    <div mol-nav-item><a class="active">Platy</a></div>
    <div mol-nav-item-end><a>Signout</a></div>
  </nav>`
}));
