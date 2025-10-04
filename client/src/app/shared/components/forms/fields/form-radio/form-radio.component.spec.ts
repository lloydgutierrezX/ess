import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioComponent } from './form-radio.component';
import { Component, DebugElement } from '@angular/core';
import { IRadioField } from '../../../../models/DynamicForm.model';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Radio } from 'lucide-angular';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <app-form-radio
    [formControl]="formControl"
    [config]="config">
  </app-form-radio>
  `,
  standalone: true,
  imports: [FormRadioComponent],
})
class TestHostComponent {
  formControl = new FormControl('option2');
  config = {
    name: 'radio-input',
    type: 'radio',
    label: {
      topLeft: 'Radio Input',
      topRight: 'Required',
      bottomLeft: 'Select one option',
    },
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ],
    orientation: 'horizontal',
    disabled: false,
    component: 'radio'
  } as IRadioField;
}

describe('FormRadioComponent', () => {
  let component: FormRadioComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let radioDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        FormRadioComponent,
        FormsModule,
        CommonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    radioDebugElement = hostFixture.debugElement.query(By.directive(FormRadioComponent));
    component = radioDebugElement.componentInstance;

    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct initial value', () => {
    expect(component.value).toBe('option2');
  });

  it('should render the correct number of radio options', () => {
    const radioOptions = radioDebugElement.nativeElement.querySelectorAll('input[type="radio"]');
    expect(radioOptions.length).toBe(3);
  });

  it('should update the value when a radio option is selected', () => {
    const radioOptions = radioDebugElement.nativeElement.querySelectorAll('input[type="radio"]');
    radioOptions[0].click(); // Select the first option
    hostFixture.detectChanges();
    expect(component.value).toBe('option1');
  });

  it('should disable all radio options when disabled is true', () => {
    hostComponent.config.disabled = true;
    hostFixture.detectChanges();
    const radioOptions = radioDebugElement.nativeElement.querySelectorAll('input[type="radio"]');
    radioOptions.forEach((option: HTMLInputElement) => {
      expect(option.disabled).toBeTrue();
    });
  });

  it('should disable an option if the option has disabled set to true', () => {
    hostComponent.config.options[1].disabled = true;
    hostFixture.detectChanges();
    const radioOptions = radioDebugElement.nativeElement.querySelectorAll('input[type="radio"]');
    expect(radioOptions[0].disabled).toBeFalse();
    expect(radioOptions[1].disabled).toBeTrue();
    expect(radioOptions[2].disabled).toBeFalse();
  });
});
