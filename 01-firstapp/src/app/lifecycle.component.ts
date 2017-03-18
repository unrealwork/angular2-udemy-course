import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  AfterContentInit,
  ContentChild
} from "@angular/core";

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{binded}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, AfterContentInit {

  @Input('bindable') binded = 1000;
  //Outside Element
  @ContentChild('boundElement') boundParagraph: HTMLElement;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
    console.log(this.boundParagraph);
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
    console.log(this.boundParagraph);
  }

  ngAfterContentChecked(): void {
    this.log('ngOnContentChecked');
    console.log(this.boundParagraph);
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy')
  }

  private log(hook: string) {
    console.log(hook);
  }
}
