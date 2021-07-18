import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../dynamic-form/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question!: QuestionBase<string>;
  @Input() formGroup!: FormGroup;

  constructor() {}

  ngOnInit() {}

  get isValid() {
    return this.formGroup.controls[this.question.key].valid;
  }
}
