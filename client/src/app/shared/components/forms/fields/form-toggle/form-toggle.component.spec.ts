import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToggleComponent } from './form-toggle.component';
import { Component, DebugElement } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { IToggleField } from '../../../../models/DynamicForm.model';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <app-form-toggle
    [formControl]="formControl"
    [config]="config">
  </app-form-toggle>
  `,
  standalone: true,
  imports: [FormToggleComponent],
})
class TestHostComponent {
  formControl = new FormControl(true);
  config = {
    name: 'toggle-input',
    type: 'toggle',
    toggleLabel: 'Enable feature',
    disabled: false,
    component: 'toggle'
  } as IToggleField;
}

describe('FormToggleComponent', () => {
  let component: FormToggleComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let toggleDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        FormToggleComponent,
        FormsModule,
        CommonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    toggleDebugElement = hostFixture.debugElement.query(By.directive(FormToggleComponent));
    component = toggleDebugElement.componentInstance;

    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    const labelElement: HTMLElement = toggleDebugElement.nativeElement.querySelector('.toggle-label');
    expect(labelElement.textContent).toBe('Enable feature');
  });

  it('should reflect the initial value of the FormControl', () => {
    const inputElement: HTMLInputElement = toggleDebugElement.nativeElement.querySelector('input[type="checkbox"]');
    expect(inputElement.checked).toBeTrue();
  });

  it('should toggle the value when clicked', () => {
    const inputElement: HTMLInputElement = toggleDebugElement.nativeElement.querySelector('input[type="checkbox"]');
    inputElement.click();
    hostFixture.detectChanges();
    expect(hostComponent.formControl.value).toBeFalse();

    inputElement.click();
    hostFixture.detectChanges();
    expect(hostComponent.formControl.value).toBeTrue();
  });

  it('should not toggle the value when disabled', () => {
    hostComponent.config.disabled = true;
    hostFixture.detectChanges();
    const inputElement: HTMLInputElement = toggleDebugElement.nativeElement.querySelector('input[type="checkbox"]');
    expect(inputElement.disabled).toBeTrue();

    const initialValue = hostComponent.formControl.value;
    inputElement.click();
    hostFixture.detectChanges();
    expect(hostComponent.formControl.value).toBe(initialValue);
  });
});
