import { storiesOf } from "@storybook/angular";
import { radios } from "@storybook/addon-knobs";

const measureStories = storiesOf("CSS Library|Typography/Line Height", module);
const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tortor consectetur, fringilla nisi quis, facilisis ipsum. Curabitur pretium placerat diam non sollicitudin. Nunc ac tortor ipsum. Pellentesque non fringilla ex, eget scelerisque nibh. Maecenas at urna diam. Aenean rutrum dui sit amet ipsum ultricies vestibulum. Nullam tempor, ligula ut efficitur molestie, nulla ante consequat risus, vitae auctor velit neque at erat. Donec felis urna, tempor eget nisl a, tempor gravida tellus. Vestibulum sed tempor est. Vestibulum tristique, magna in feugiat feugiat, nisl neque gravida leo, et fermentum turpis lacus in elit. Suspendisse viverra, quam et viverra tincidunt, ante ligula vestibulum erat, faucibus pellentesque ex elit vitae ligula. Vestibulum tempor dolor at ornare convallis. Praesent sed lacinia mauris.";

measureStories.add("All Line Heights", () => ({
  props: {
    loremipsum,
    measure: radios(
      "Measure",
      {
        narrow: "mol-mea-n",
        normal: "mol-mea",
        wide: "mol-mea-w"
      },
      "mol-mea-w"
    ),
    items: [
      { desc: "none", class: "" },
      { desc: "solid", class: "mol-lh-s" },
      { desc: "title", class: "mol-lh-t" },
      { desc: "copy", class: "mol-lh-c" }
    ]
  },
  template: `
    <h1>All Line Height</h1>
    <ng-container *ngFor="let item of items">
      <h3>{{ item.desc }} <span *ngIf="item.class">({{item.class}})</span></h3>
      <div class="{{measure}} {{ item.class }}">
        {{ loremipsum }}
      </div>
      <br>
    </ng-container>
  `
}));
