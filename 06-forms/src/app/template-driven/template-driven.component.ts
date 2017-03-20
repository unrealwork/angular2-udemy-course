import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [
    `input.ng-invalid {
      border: 1px red solid;
    }`
  ]
})
export class TemplateDrivenComponent {
  genders: string[] = ['Male', 'Female'];

  user = {
    name: 'Igor',
    password: 'test',
    email: 'unrealwork@gmail.com',
    gender: this.genders[0]
  };


  onSubmit(form: NgForm) {
    console.log(this.user);
  }
}
