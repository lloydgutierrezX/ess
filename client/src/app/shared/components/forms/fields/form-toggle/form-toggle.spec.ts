import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToggle } from './form-toggle';

describe('FormToggle', () => {
  let component: FormToggle;
  let fixture: ComponentFixture<FormToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
