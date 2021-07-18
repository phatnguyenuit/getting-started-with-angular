import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TemplateDrivenFormsComponent implements OnInit {
  favoriteColor = '';

  constructor() {}

  ngOnInit() {}
}
