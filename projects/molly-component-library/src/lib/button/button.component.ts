import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from './button';

@Component({
  selector: 'mol-btn',
  template: `
    <button
      class="mol-btn mol-m-t-sm mol-p-sm mol-tc {{ colorClasses }} {{
        sizeClasses
      }}"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  public type = ButtonType.DEFAULT;

  @Input()
  public size = ButtonSize.MEDIUM;

  public colorClasses: string;
  public sizeClasses: string;

  public ngOnInit(): void {
    switch (this.type) {
      case ButtonType.PRIMARY:
        this.colorClasses = 'mol-bc-primary mol-c-white';
        break;
      case ButtonType.SECONDARY:
        this.colorClasses = 'mol-bc-secondary mol-c-white';
        break;
      case ButtonType.TERTIARY:
        this.colorClasses = 'mol-bc-tertiary mol-c-white';
        break;
      default:
        this.colorClasses = 'mol-bc-white mol-c-black';
        break;
    }

    switch (this.size) {
      case ButtonSize.SMALL:
        this.sizeClasses = 'mol-fs-sm';
        break;
      case ButtonSize.MEDIUM:
        this.sizeClasses = 'mol-fs-md';
        break;
      case ButtonSize.LARGE:
        this.sizeClasses = 'mol-fs-vl';
        break;
      default:
        this.sizeClasses = 'mol-fs-md';
        break;
    }
  }
}
