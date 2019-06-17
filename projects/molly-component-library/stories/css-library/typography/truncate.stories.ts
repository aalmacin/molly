import { storiesOf } from "@storybook/angular";
import { propFactory, commonProps } from './propFactory.util';

const truncateStories = storiesOf("CSS Library|Typography", module);

truncateStories.add("Truncate", () => ({
  props: propFactory(
    [],
    commonProps.measure,
    commonProps.longText
  ),
  template: `
      <h2>mol-trunc</h2>
      <div class="mol-ttrunc {{ measure }}">
        {{ longText }}
      </div>
  `
}));
