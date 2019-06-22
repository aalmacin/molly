import { Component, Directive, Input, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from './public-api';

@Directive({
  host: { '[class]': 'classes' },
  selector: '[molBtn]'
})
export class ButtonComponent implements OnInit {
  @Input()
  public type = ButtonType.DEFAULT;

  @Input()
  public size = ButtonSize.LARGE;

  public classes = '';

  public ngOnInit(): void {
    let colorClasses = '';
    let sizeClasses = '';

    switch (this.type) {
      case ButtonType.PRIMARY:
        colorClasses = 'mol-sbg-primary mol-sc-white';
        break;
      case ButtonType.SECONDARY:
        colorClasses = 'mol-sbg-secondary mol-sc-white';
        break;
      case ButtonType.TERTIARY:
        colorClasses = 'mol-sbg-tertiary mol-sc-white';
        break;
      default:
        colorClasses = 'mol-sbg-white mol-sc-black';
        break;
    }

    switch (this.size) {
      case ButtonSize.SMALL:
        sizeClasses = 'mol-tf-sm mol-lp-sm';
        break;
      case ButtonSize.MEDIUM:
        sizeClasses = 'mol-tf-md mol-lp-md';
        break;
      case ButtonSize.LARGE:
        sizeClasses = 'mol-tf-vl mol-lp-x-lg mol-lp-y-md';
        break;
      default:
        sizeClasses = 'mol-tf-md mol-lp-md';
        break;
    }

    this.classes = `${colorClasses} ${sizeClasses}`;
  }
}
