import { text, radios } from "@storybook/addon-knobs";

type Prop = { name: string; func: Function };
type StoryItem = { desc: string; class: string };

const createFontSize = () =>
  radios(
    "Font Size",
    {
      small: "mol-tf-sm",
      normal: "",
      large: "mol-tf-lg",
      "very large": "mol-tf-vl"
    },
    "mol-tf-sm"
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

const createHeading = () =>
  text(
    "Heading",
    "LOREM IPSUM DOLOR SIT AMET"
  );

const createMeasure = () =>
  radios(
    "Measure",
    {
      narrow: "mol-tm-n",
      normal: "mol-tm",
      wide: "mol-tm-w"
    },
    "mol-tm-w"
  );

export const commonProps = {
  fontSize: { name: "fontSize", func: createFontSize },
  text: { name: "text", func: createText },
  heading: { name: "heading", func: createHeading },
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
