import { Component, Input, OnInit, Directive } from '@angular/core';
import { ButtonSize, ButtonType } from './public-api';

@Directive({
  host: { '[class]': 'classes' },
  selector: '[molBtn]'
})
export class ButtonComponent implements OnInit {
  @Input()
  public type = ButtonType.DEFAULT;

  @Input()
  public size = ButtonSize.MEDIUM;

  private classes = '';

  public ngOnInit(): void {
    let colorClasses = '';
    let sizeClasses = '';

    switch (this.type) {
      case ButtonType.PRIMARY:
        colorClasses = 'mol-bc-primary mol-c-white';
        break;
      case ButtonType.SECONDARY:
        colorClasses = 'mol-bc-secondary mol-c-white';
        break;
      case ButtonType.TERTIARY:
        colorClasses = 'mol-bc-tertiary mol-c-white';
        break;
      default:
        colorClasses = 'mol-bc-white mol-c-black';
        break;
    }

    switch (this.size) {
      case ButtonSize.SMALL:
        sizeClasses = 'mol-fs-sm';
        break;
      case ButtonSize.MEDIUM:
        sizeClasses = 'mol-fs-md';
        break;
      case ButtonSize.LARGE:
        sizeClasses = 'mol-fs-vl';
        break;
      default:
        sizeClasses = 'mol-fs-md';
        break;
    }

    this.classes = `${colorClasses} ${sizeClasses}`;
  }
}
