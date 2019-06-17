import { storiesOf } from "@storybook/angular";
import { radios } from '@storybook/addon-knobs';

const truncateStories = storiesOf("CSS Library|Typography", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet leo leo. Sed pretium arcu tellus, ut tristique felis imperdiet facilisis. Aliquam vitae nisl sollicitudin, congue ipsum id, maximus ligula. Donec commodo, orci sit amet accumsan maximus, magna dolor maximus tortor, ultricies ultricies diam eros eu lacus.";

truncateStories.add("Truncate", () => ({
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
      <div class="mol-ttrunc {{ measure }}">
        {{ loremipsum }}
      </div>
  `
}));
