import { text, radios } from "@storybook/addon-knobs";

type Prop = { name: string; func: Function };
type StoryItem = { desc: string; class: string };

const createFontSize = () =>
  radios(
    "Font Size",
    {
      small: "mol-f-sm",
      normal: "",
      large: "mol-f-lg",
      "very large": "mol-f-vl"
    },
    "mol-f-sm"
  );

const createText = () =>
  text(
    "Text",
    "the quick brown fox jumps over the lazy dog THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
  );

const createLongText = () =>
  text(
    "Long Text",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tortor consectetur, fringilla nisi quis, facilisis ipsum. Curabitur pretium placerat diam non sollicitudin. Nunc ac tortor ipsum. Pellentesque non fringilla ex, eget scelerisque nibh. Maecenas at urna diam. Aenean rutrum dui sit amet ipsum ultricies vestibulum. Nullam tempor, ligula ut efficitur molestie, nulla ante consequat risus, vitae auctor velit neque at erat. Donec felis urna, tempor eget nisl a, tempor gravida tellus. Vestibulum sed tempor est. Vestibulum tristique, magna in feugiat feugiat, nisl neque gravida leo, et fermentum turpis lacus in elit. Suspendisse viverra, quam et viverra tincidunt, ante ligula vestibulum erat, faucibus pellentesque ex elit vitae ligula. Vestibulum tempor dolor at ornare convallis. Praesent sed lacinia mauris."
  );

const createMeasure = () =>
  radios(
    "Measure",
    {
      narrow: "mol-mea-n",
      normal: "mol-mea",
      wide: "mol-mea-w"
    },
    "mol-mea-w"
  );

export const commonProps = {
  fontSize: { name: "fontSize", func: createFontSize },
  text: { name: "text", func: createText },
  longText: { name: "longText", func: createLongText },
  measure: { name: "measure", func: createMeasure }
};

const createItems = (...items: StoryItem[]) => ({
  name: "items",
  func: () => items
});

export const propFactory = (items: StoryItem[], ...props: Prop[]) => {
  props.push(createItems(...items));
  return props.reduce(
    (acc, curr) => ({ ...acc, [curr.name]: curr.func() }),
    {}
  );
};
