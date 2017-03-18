import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-lifecycle *ngIf="isLifeCycleComponentAvailable" [bindable] = "boundValue">
      <p #boundElement>{{test}}</p>
    </app-lifecycle>
    <button (click)="isLifeCycleComponentAvailable = false">Delete Component!</button>
    <button (click)="test = 'Changed Value'">Click to Change!</button>
    <button (click)="boundValue = 2000">Click to Change Binding!</button>
  `,
  styles: [
    `h1 {   
        color: red;
      }`
  ]
})
export class AppComponent {
  public isLifeCycleComponentAvailable: boolean = true;
  public test: string = 'Starting Value';
  public boundValue = 1000;
}
