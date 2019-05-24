import { Component, Input } from "@angular/core";

@Component({
  selector: "mol-btn",
  template: `
    <button class="mol-btn mol-m-t-sm mol-p-sm mol-b-black mol-c-white mol-bc-green mol-tc">
      {{ text }}
    </button>
  `,
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input()
  text = "";
}
