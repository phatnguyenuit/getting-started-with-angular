import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { QuestionBase } from '../reactive-forms/dynamic-form/question-base';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    const controls: Record<string, AbstractControl> = questions.reduce(
      (acc, question) => {
        const defaultValue = question.value || '';
        const validator: ValidatorFn | null = question.required
          ? Validators.required
          : null;

        const formControl: FormControl = new FormControl(
          defaultValue,
          validator
        );

        return Object.assign(acc, {
          [question.key]: formControl,
        });
      },
      {}
    );

    return new FormGroup(controls);
  }
}
