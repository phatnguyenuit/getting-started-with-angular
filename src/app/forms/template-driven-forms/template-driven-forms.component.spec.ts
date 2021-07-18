import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

describe('TemplateDrivenFormsComponent', () => {
  let component: TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsComponent>;
  let compiled: HTMLElement;

  const changeValue = async (input: HTMLInputElement, value: string) => {
    input.value = value;
    input.dispatchEvent(new Event('change'));
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const getByTestId = <TElement extends Element>(testId: string) => {
    const element: TElement | null = compiled.querySelector(
      `[data-testid="${testId}"]`
    );
    if (!element)
      throw new Error(
        `Cannot find element with data-testid=${JSON.stringify(testId)}`
      );

    return element;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormsComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update favorite color from view to model', async () => {
    const input = getByTestId<HTMLInputElement>('favorite-color');
    const actualColor = 'Blue';

    await changeValue(input, actualColor);
    expect(component.favoriteColor).toEqual(actualColor);
  });

  it('should update favorite color from model to view', async () => {
    const input = getByTestId<HTMLInputElement>('favorite-color');

    expect(input.value).toEqual('');

    const actualColor = 'Blue';
    component.favoriteColor = actualColor;
    await fixture.detectChanges();

    expect(input.value).toEqual(actualColor);
  });
});
