import { storiesOf } from "@storybook/angular";

const measureStories = storiesOf("CSS Library/Typography/Measures", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tortor consectetur, fringilla nisi quis, facilisis ipsum. Curabitur pretium placerat diam non sollicitudin. Nunc ac tortor ipsum. Pellentesque non fringilla ex, eget scelerisque nibh. Maecenas at urna diam. Aenean rutrum dui sit amet ipsum ultricies vestibulum. Nullam tempor, ligula ut efficitur molestie, nulla ante consequat risus, vitae auctor velit neque at erat. Donec felis urna, tempor eget nisl a, tempor gravida tellus. Vestibulum sed tempor est. Vestibulum tristique, magna in feugiat feugiat, nisl neque gravida leo, et fermentum turpis lacus in elit. Suspendisse viverra, quam et viverra tincidunt, ante ligula vestibulum erat, faucibus pellentesque ex elit vitae ligula. Vestibulum tempor dolor at ornare convallis. Praesent sed lacinia mauris.";

measureStories.add("All Line Heights", () => ({
  props: {
    loremipsum
  },
  template: `
    <h3>None</h3>
    <div class="mol-mea">
      {{ loremipsum }}
    </div>
    <br>

    <h3>Solid</h3>
    <div class="mol-mea mol-lh-solid">
      {{ loremipsum }}
    </div>
    <br>

    <h3>Title</h3>
    <div class="mol-mea mol-lh-title">
      {{ loremipsum }}
    </div>
    <br>

    <h3>Copy</h3>
    <div class="mol-mea mol-lh-copy">
      {{ loremipsum }}
    </div>
    <br>
  `
}));