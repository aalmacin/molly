import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { InfoCardComponent, MolButtonModule } from '../src/public-api';

const stories = storiesOf('Raidrin|Info Card', module);

stories.add('Default', () => ({
  moduleMetadata: {
    declarations: [InfoCardComponent],
    imports: [MolButtonModule]
  },
  template: `
    <div class="mol-lw-25">
      <mol-info-card [heading]="heading">
        <p>{{ content }}</p>
        <img src="/assets/wood.jpeg" />
        <a href="#" molBtn type="primary">View</a>
      </mol-info-card>
    </div>
  `,
  props: {
    content: text(
      'content',
      'Morbi egestas, justo ultrices lacinia consequat, tortor nisl malesuada mi, convallis posuere elit orci at risus.'
    ),
    heading: text('heading', 'Lorem ipsum dolor sit amet')
  }
}));

stories.add('No Image', () => ({
  moduleMetadata: {
    declarations: [InfoCardComponent],
    imports: [MolButtonModule]
  },
  template: `
    <div class="mol-lw-25">
      <mol-info-card [heading]="heading">
        <p>{{ content }}</p>
        <a href="#" molBtn type="primary">View</a>
      </mol-info-card>
    </div>
  `,
  props: {
    content: text(
      'content',
      'Morbi egestas, justo ultrices lacinia consequat, tortor nisl malesuada mi, convallis posuere elit orci at risus.'
    ),
    heading: text('heading', 'Lorem ipsum dolor sit amet')
  }
}));

stories.add('No Button', () => ({
  moduleMetadata: {
    declarations: [InfoCardComponent],
    imports: [MolButtonModule]
  },
  template: `
    <div class="mol-lw-25">
      <mol-info-card [heading]="heading">
        <p>{{ content }}</p>
        <img src="/assets/wood.jpeg" />
      </mol-info-card>
    </div>
  `,
  props: {
    content: text(
      'content',
      'Morbi egestas, justo ultrices lacinia consequat, tortor nisl malesuada mi, convallis posuere elit orci at risus.'
    ),
    heading: text('heading', 'Lorem ipsum dolor sit amet')
  }
}));
