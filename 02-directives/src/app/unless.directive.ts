import {Directive, ViewContainerRef, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {
  @Input() set dirUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  };

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
