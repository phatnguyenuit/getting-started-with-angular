import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  profileFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.profileFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]], // can use array of validators or just one validator
      lastName: [''],
      // nested form group
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zipCode: [''],
      }),
    });
  }

  ngOnInit(): void {}

  updateValues() {
    this.profileFormGroup.patchValue({
      firstName: 'Fast',
      address: {
        street: 'Lien Phuong street',
      },
    });
  }
}
