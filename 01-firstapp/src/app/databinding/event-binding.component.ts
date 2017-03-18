import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>();

  onClicked(): void {
    this.clicked.emit('It works!');
  }
}
