import { Prop, StoryItem } from './types';

const createItems = (...items: StoryItem[]) => ({
  func: () => items,
  name: 'items'
});

export const propFactory = (items: StoryItem[], ...props: Prop[]) => {
  props.push(createItems(...items));
  return props.reduce(
    (acc, curr) => ({ ...acc, [curr.name]: curr.func() }),
    {}
  );
};
