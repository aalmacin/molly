import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonSize, ButtonType } from './public-api';

@Directive({
  selector: '[molBtn]'
})
export class ButtonDirective implements OnInit {
  @Input()
  public type = ButtonType.DEFAULT;

  @Input()
  public size = ButtonSize.LARGE;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  public ngOnInit(): void {
    const btnType = `mol-c-btn-${this.type}`;
    const btnSize = `mol-c-btn-size-${this.size}`;

    this.renderer.addClass(this.hostElement.nativeElement, btnType);
    this.renderer.addClass(this.hostElement.nativeElement, btnSize);
  }
}
