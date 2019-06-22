import { storiesOf } from '@storybook/angular';

const stories = storiesOf('CSS Library|Layout', module);

stories.add('Display', () => ({
  props: {},
  template: `
    <h3>Display: none</h3>
    <div>
      Should not display: <div class="mol-ld-n">Hello</div>
    </div>

    <h3>Display: block</h3>
    <div>
      Should display block: <span class="mol-ld-b">Hello</span>
    </div>

    <h3>Display: inline-block</h3>
    <div>
      Should display inline-block: <span class="mol-ld-ib"><p>Hello</p><p>World</p></span>
    </div>

    <h3>Display: inline</h3>
    <div>
      Should display inline: <div class="mol-ld-i">Hello</div>
    </div>
  `
}));
