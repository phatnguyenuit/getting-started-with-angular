import { Component, OnInit } from '@angular/core';

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
  ];

  constructor() {}

  ngOnInit() {}
}
