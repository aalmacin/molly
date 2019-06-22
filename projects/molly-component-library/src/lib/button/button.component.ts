import {
  Component,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { ButtonSize, ButtonType } from './public-api';

@Directive({
  selector: '[molBtn]'
})
export class ButtonComponent implements OnInit {
  @Input()
  public type = ButtonType.DEFAULT;

  @Input()
  public size = ButtonSize.LARGE;

  public classes = '';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  public ngOnInit(): void {
    let color = 'mol-sc-black';
    let backgroundColor = 'mol-sbg-white';
    let textSize = 'mol-tf-md';
    let padding = 'mol-lp-md';
    let padding2 = 'mol-lp-md';

    switch (this.type) {
      case ButtonType.PRIMARY:
        color = 'mol-sc-white';
        backgroundColor = 'mol-sbg-primary';
        break;
      case ButtonType.SECONDARY:
        color = 'mol-sc-white';
        backgroundColor = 'mol-sbg-secondary';
        break;
      case ButtonType.TERTIARY:
        color = 'mol-sc-white';
        backgroundColor = 'mol-sbg-tertiary';
        break;
      default:
        break;
    }

    switch (this.size) {
      case ButtonSize.SMALL:
        textSize = 'mol-tf-sm';
        padding = 'mol-lp-sm';
        break;
      case ButtonSize.MEDIUM:
        textSize = 'mol-tf-md';
        padding = 'mol-lp-md';
        break;
      case ButtonSize.LARGE:
        textSize = 'mol-tf-vl';
        padding = 'mol-lp-x-lg';
        padding2 = 'mol-lp-y-md';
        break;
      default:
        textSize = 'mol-tf-md';
        padding = 'mol-lp-md';
        break;
    }

    this.renderer.addClass(this.hostElement.nativeElement, color);
    this.renderer.addClass(this.hostElement.nativeElement, backgroundColor);
    this.renderer.addClass(this.hostElement.nativeElement, textSize);
    this.renderer.addClass(this.hostElement.nativeElement, padding);
    this.renderer.addClass(this.hostElement.nativeElement, padding2);
  }
}
