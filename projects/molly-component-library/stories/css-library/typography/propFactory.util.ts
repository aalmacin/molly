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

export const commonProps = {
  fontSize: { name: "fontSize", func: createFontSize },
  text: { name: "text", func: createText }
};

const createItems = (...items: StoryItem[]) => ({
  name: "items",
  func: () => items
});

export const propFactory = (items: StoryItem[], ...props: Prop[]) => {
  props.push(createItems(...items));
  return props.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.func() }), {});
}