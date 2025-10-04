import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxComponent } from './form-checkbox.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ICheckboxField } from '../../../../models/DynamicForm.model';
import { Component, DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <app-form-checkbox
    [formControl]="formControl"
    [config]="config">
  </app-form-checkbox>
  `,
  standalone: true,
  imports: [FormCheckboxComponent],
})
class TestHostComponent {
  formControl = new FormControl(true);
  config = {
    name: 'checkbox-input',
    type: 'checkbox',
    checkboxLabel: 'Accept terms',
    disabled: false,
    style: 'primary',
    component: 'checkbox'
  } as ICheckboxField;
}

describe('FormCheckboxComponent', () => {
  let component: FormCheckboxComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let checkboxDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        FormCheckboxComponent,
        FormsModule,
        CommonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    checkboxDebugElement = hostFixture.debugElement.query(By.directive(FormCheckboxComponent));
    component = checkboxDebugElement.componentInstance;

    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct label', () => {
    const labelElement: HTMLElement = checkboxDebugElement.nativeElement.querySelector('label');
    expect(labelElement.textContent).toContain('Accept terms');
  });

  it('should be enabled when config.disabled is false', () => {
    const inputElement: HTMLInputElement = checkboxDebugElement.nativeElement.querySelector('input');
    expect(inputElement.disabled).toBeFalse();
  });

  it('should be disabled when config.disabled is true', () => {
    hostComponent.config.disabled = true;
    hostFixture.detectChanges();

    const inputElement: HTMLInputElement = checkboxDebugElement.nativeElement.querySelector('input');
    expect(inputElement.disabled).toBeTrue();
  });
});
