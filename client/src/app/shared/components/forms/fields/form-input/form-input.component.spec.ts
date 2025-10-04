import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import { Component, Input } from '@angular/core';
import { IInputField } from '../../../../models/DynamicForm.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-icon',
  template: '<span></span>',
  standalone: true
})
class MockIconComponent {
  @Input() name!: string;
  @Input() class!: string;
  @Input() ariaLabel!: string;
}

@Component({
  template: `
  <app-form-input
    [formControl]="formControl"
    [config]="config">
  </app-form-input>
  `,
  standalone: true,
  imports: [FormInputComponent, MockIconComponent],
})
class TestHostComponent {
  formControl = new FormControl('');
  config: IInputField = {
    name: 'test-input',
    type: 'text',
    label: {
      topLeft: 'Test Label'
    },
    component: 'input',
  } as IInputField;
}

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    const formInputDebugElement = hostFixture.debugElement.children.find(
      (child) => child.componentInstance instanceof FormInputComponent
    );
    component = formInputDebugElement!.componentInstance;
    hostFixture.detectChanges();

    component.ngOnInit();
  });

  it('should create and initialize successfully', () => {
    expect(component).toBeTruthy();

    expect(component.type).toBe('text');
    expect(component.icon).toBe('');
    expect(component.name).toBe('test-input');
    expect(component.value).toBe('');
    expect(component.placeholder).toBe('');
    expect(component.readonly).toBe(false);
    expect(component.disabled).toBe(false);
    expect(component.showPassword).toBe(false);
  });

  it('should initialize with type "password" and icon "eye-off"', () => {
    hostComponent.config.type = 'password';
    hostFixture.detectChanges();

    component.ngOnInit();

    expect(component.type).toBe('password');
    expect(component.icon).toBe('eye-off');
  });

  it('should toggle password visibility when onClick is called on password type', () => {
    hostComponent.config.type = 'password';
    hostFixture.detectChanges();

    component.ngOnInit();

    component.onClick();

    expect(component.type).toBe('text');
    expect(component.icon).toBe('eye');

    component.onClick();

    expect(component.type).toBe('password');
    expect(component.icon).toBe('eye-off');
  });
});
