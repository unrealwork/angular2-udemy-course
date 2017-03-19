import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";

@Component({
  selector: 'app-user-edit',
  template: `
        <h3>User Edit</h3>
        <button (click)="done = true">Done</button>
        <button (click)="onNavigate()">Go home!</button>
    `
})
export class UserEditComponent implements ComponentCanDeactivate {
  canDeactivate() {
    if (!this.done) {
      return confirm('Are sure? You are not done');
    }
  }

  done = false;

  constructor(private router: Router) {

  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {analytics: 100}, fragment: 'section2'});
  }
}
