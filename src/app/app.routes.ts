import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './forms/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: AppComponent
    },
    {
        path: 'template',
        component: TemplateFormComponent
    }, 
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
