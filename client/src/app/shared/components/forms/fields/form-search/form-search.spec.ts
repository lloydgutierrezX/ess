import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearch } from './form-search';

describe('FormSearch', () => {
  let component: FormSearch;
  let fixture: ComponentFixture<FormSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
