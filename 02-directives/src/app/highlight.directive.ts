import {Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string = 'white';

  constructor() {
  }
}
