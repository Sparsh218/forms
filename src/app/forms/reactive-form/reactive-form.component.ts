import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Init } from 'v8';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  defaultUsername = 'DemoUser';
  secretAnswer = null;
  genders = ['Male', 'Female'];
  formGroup: FormGroup;
  hobbies: FormArray = new FormArray([]);

  ngOnInit() {
    this.formGroup = new FormGroup({
      'username': new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        this.invalidNameValidator.bind(this)
      ]),
      'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
      'secret': new FormControl(null, [Validators.required]),
      'answer': new FormControl(null, [Validators.required]),
      'genderDetails': new FormGroup({
        'gender': new FormControl(null, [Validators.required]),
      }),
      // 'hobbies' : this.hobbies
      'hobbies': new FormArray([])
    });
  }

  get Hobbies() {
    return (this.formGroup.get('hobbies') as FormArray)?.controls;
  }

  onAddHobby() {
    let formControl = new FormControl(null);
    // this.hobbies.push(formControl);
    (this.formGroup.get('hobbies') as FormArray).push(formControl);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted:', this.formGroup.value);
    } else {
      console.log('Form is invalid: ',this.formGroup);
    }
  }

  suggestUsername() {
    this.formGroup.get('username').patchValue({
      username: this.defaultUsername,
    });
  }

  invalidNameValidator(form: FormControl): { [s: string]: boolean} {
    if (this.genders.indexOf(form.value) !== -1) {
      return {
        'forbiddenName' : true
      };
    }
    return null;
  }

  forbiddenEmails(form: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (form.value === 'a@b.c') {
          resolve({
            'invalidEmail': true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}