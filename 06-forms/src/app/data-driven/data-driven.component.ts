import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  private static EMAIL_REGEX: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  genders = ['Male', 'Female'];


  constructor(private formBuilder: FormBuilder) {
    /*this.myForm = new FormGroup({
     userData: new FormGroup({
     username: new FormControl('Igor', Validators.required),
     email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(DataDrivenComponent.EMAIL_REGEX))])
     }),
     password: new FormControl('', Validators.required),
     gender: new FormControl(this.genders[0]),
     hobbies: new FormArray([
     new FormControl('Cooking')
     ])
     });*/

    this.myForm = formBuilder.group({
        userData: formBuilder.group({
          username: ['Igor', [Validators.required, this.exampleValidator]],
          email: ['', [Validators.required, Validators.pattern(new RegExp(DataDrivenComponent.EMAIL_REGEX))]]
        }),
        password: ['', [Validators.required]],
        gender: [this.genders[0]],
        hobbies: formBuilder.array([
          ['Cooking', Validators.required, this.asyncExampleValidator]
        ],)
      }
    )

    this.myForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    )

    this.myForm.statusChanges.subscribe(
      (value) => {
        console.log(value);
      }
    )
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onHobbyAdd() {
    (<FormArray> this.myForm.get('hobbies')).push(new FormControl('', Validators.required))
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {
        example: true
      }
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({
              invalid: true
            })
          } else {
            resolve(null);
          }
        }, 1000);
      }
    );
    return promise;
  }
}
