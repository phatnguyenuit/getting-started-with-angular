import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './dynamic-form/question-base';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  selectedComponent = 'formControl';
  componentOptions: Option[] = [
    {
      value: 'formControl',
      label: 'Form Control',
    },
    {
      value: 'formGroup',
      label: 'Form Group',
    },
    {
      value: 'formBuilder',
      label: 'Form Builder',
    },
    {
      value: 'formArray',
      label: 'Form Array',
    },
    {
      value: 'dynamicForm',
      label: 'Dynamic Form',
    },
  ];

  questions$: Observable<QuestionBase<any>[]>;

  constructor(private questionService: QuestionService) {
    this.questions$ = this.questionService.getQuestions();
  }

  ngOnInit() {}
}
