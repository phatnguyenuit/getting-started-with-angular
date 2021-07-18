import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule as NgFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormControlComponent } from './reactive-forms/form-control/form-control.component';
import { FormGroupComponent } from './reactive-forms/form-group/form-group.component';
import { FormBuilderComponent } from './reactive-forms/form-builder/form-builder.component';
import { FormArrayComponent } from './reactive-forms/form-array/form-array.component';

@NgModule({
  declarations: [
    FormsComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgFormsModule,
    ReactiveFormsModule,
  ],
})
export class FormsModule {}
