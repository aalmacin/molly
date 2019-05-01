import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-card',
  template: `
    <div class="heading mol-w-vs mol-bc-green">
      {{ heading }}
    </div>
    <div class="content mol-w-vs">
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
