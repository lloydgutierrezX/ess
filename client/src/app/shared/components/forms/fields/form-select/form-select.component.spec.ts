import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectComponent } from './form-select.component';
import { FormControl, FormsModule } from '@angular/forms';
import { Component, DebugElement } from '@angular/core';
import { ISelectField } from '../../../../models/DynamicForm.model';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <app-form-select
    [formControl]="formControl"
    [config]="config">
  </app-form-select>
  `,
  standalone: true,
  imports: [FormSelectComponent],
})
class TestHostComponent {
  formControl = new FormControl('2');
  config = {
    name: 'test-select',
    type: 'select',
    label: {
      topLeft: 'Test Select'
    },
    component: 'select',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]
  } as ISelectField;
}

describe('FormSelectComponent', () => {
  let component: FormSelectComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let selectDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        FormSelectComponent,
        FormsModule,
        CommonModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    selectDebugElement = hostFixture.debugElement.query(By.directive(FormSelectComponent));
    component = selectDebugElement.componentInstance;

    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the options array corectly', () => {
    expect(component.options.length).toBe(2);
    expect(component.options[0].label).toBe('Option 1');
    expect(component.options[1].value).toBe('2');
  });

  it('should initialize the form control value correctly', () => {
    expect(component.value).toBe('2');
  });

  it('should update the component value when form control changes', () => {
    hostComponent.formControl.setValue('1');
    hostFixture.detectChanges();
    expect(component.value).toBe('1');
  });

  it('should return the correct placeholder and disabled values', () => {
    expect(component.placeholder).toBe('');
    expect(component.disabled).toBe(false);

    hostComponent.config.placeholder = 'Select an option';
    hostComponent.config.disabled = true;
    hostFixture.detectChanges();

    expect(component.placeholder).toBe('Select an option');
    expect(component.disabled).toBe(true);
  });
});
