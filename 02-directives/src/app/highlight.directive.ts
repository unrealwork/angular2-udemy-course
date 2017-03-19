import {Directive, HostListener, HostBinding, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'red';
  private backgroundColor: string;

  constructor() {
  }

}
