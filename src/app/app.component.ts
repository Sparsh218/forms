import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from "./forms/template-form/template-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
}
