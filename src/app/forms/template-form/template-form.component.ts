import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FilterPipe } from '../pipe/filterpipe.pipe';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  defaultUsername = "DemoUser";
  secretAnswer = null;
  genders = ["Male" , "Female"];
  @ViewChild("form") myForm: NgForm;

  constructor() {}

  onSubmitForm(form: NgForm) {
    //access form values only on submit
    console.log("submit");
    console.log(form);
    form.reset();
  }

  suggestUsername() {
    console.log("suggest");
    this.myForm.form.patchValue({
      username: this.defaultUsername
    });
  }
}
