import { Component, Input } from "@angular/core";

@Component({
  selector: "mol-card",
  template: `
    <div class="mol-card">
      <div class="mol-b-green mol-bc-green-light mol-c-black mol-p-sm mol-fh">
        {{ heading }}
      </div>
      <div class="mol-b-green mol-bc-green-vlight p-lg">
        {{ content }}
      </div>
    </div>
  `,
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input()
  heading = "";

  @Input()
  content = "";
}
