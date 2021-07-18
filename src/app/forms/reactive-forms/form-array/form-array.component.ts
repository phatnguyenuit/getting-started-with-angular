import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      names: this.formBuilder.array([this.generateNewControl()]),
    });
  }

  ngOnInit() {}

  get names(): FormArray {
    return this.formGroup.get('names') as FormArray;
  }

  generateNewControl(defaultValue = '') {
    return this.formBuilder.control(defaultValue);
  }

  addNewControl() {
    this.names.push(this.generateNewControl());
  }

  removeControl(index: number) {
    this.names.removeAt(index);
  }
}
