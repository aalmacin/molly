import { Component, Input } from '@angular/core';

@Component({
  selector: 'mol-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="mol-card">
      <div
        class="mol-b-primary-light-x mol-b-primary-light-t mol-bc-primary-light mol-c-white mol-tc mol-p-sm mol-fh"
      >
        {{ heading }}
      </div>
      <div
        class="mol-b-primary-light-x mol-b-primary-light-b mol-bc-white mol-tc p-lg"
      >
        {{ content }}
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input()
  public heading = '';

  @Input()
  public content = '';
}
