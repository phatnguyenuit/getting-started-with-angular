// Reference: https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library

import { FormBuilder } from '@angular/forms';
import { render } from '@testing-library/angular';
import { FormArrayComponent } from './form-array.component';

describe('FormArrayComponent', () => {
  it('should render the form array', async () => {
    await render(FormArrayComponent, {
      providers: [FormBuilder],
    });
  });
});
