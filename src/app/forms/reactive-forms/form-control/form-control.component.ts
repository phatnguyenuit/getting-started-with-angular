import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  favoriteColorControl = new FormControl('');

  constructor() {}

  ngOnInit() {}

  setValue(value: string) {
    this.favoriteColorControl.setValue(value);
  }
}
