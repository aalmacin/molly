import { storiesOf } from "@storybook/angular";
import { radios } from '@storybook/addon-knobs';

const truncateStories = storiesOf("CSS Library|Typography/Truncate", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet leo leo. Sed pretium arcu tellus, ut tristique felis imperdiet facilisis. Aliquam vitae nisl sollicitudin, congue ipsum id, maximus ligula. Donec commodo, orci sit amet accumsan maximus, magna dolor maximus tortor, ultricies ultricies diam eros eu lacus.";

truncateStories.add("all", () => ({
  props: {
    measure: radios(
      "Measure",
      {
        none: "",
        narrow: "mol-mea-n",
        normal: "mol-mea",
        wide: "mol-mea-w"
      },
      "mol-mea-n"
    ),
    loremipsum
  },
  template: `
      <h2>mol-trunc</h2>
      <div class="mol-trunc {{ measure }}">
        {{ loremipsum }}
      </div>
  `
}));
