import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-card',
  template: `
    <div class="heading rd-w-vs rd-bc-green">
      {{ heading }}
    </div>
    <div class="content rd-w-vs">
      {{ content }}
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  heading = '';

  @Input()
  content = '';
}
