import { Component, Input } from "@angular/core";
import { ButtonType } from "./ButtonType";

@Component({
  selector: "mol-btn",
  template: `
    <button
      [class]="
        'mol-btn mol-m-t-sm mol-p-sm mol-tc ' +
        getColors()
      "
    >
      {{ text }}
    </button>
  `,
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input()
  text = "";

  @Input()
  type = ButtonType.PRIMARY;

  getColors() {
    switch (this.type) {
      case ButtonType.PRIMARY:
        return "mol-bc-primary mol-c-white";
      case ButtonType.SECONDARY:
        return "mol-bc-secondary mol-c-white";
      case ButtonType.TERTIARY:
        return "mol-bc-tertiary mol-c-white";
      default:
        return "mol-bc-white mol-c-black";
    }
  }
}
