import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScalefont]'
})
export class ScalefontDirective {
  @Input() fontSize: string;

  constructor(private el: ElementRef) { }

  @HostListener('click') onMouseClick() {
    this.scaleFont(this.fontSize);
  }

  private scaleFont(n: string) {
    this.el.nativeElement.style.fontSize = `${n}px`;
  }
}
