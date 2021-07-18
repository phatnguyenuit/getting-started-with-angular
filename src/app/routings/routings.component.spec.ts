import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutingsComponent } from './routings.component';

describe('RoutingsComponent', () => {
  let component: RoutingsComponent;
  let fixture: ComponentFixture<RoutingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
