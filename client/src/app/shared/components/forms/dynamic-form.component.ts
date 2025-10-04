import { Component, Input, OnInit } from '@angular/core';
import { IButtons, IDynamicForm, IFields } from '../../models/DynamicForm.model';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './fields/form-input/form-input.component';
import { FormSelectComponent } from './fields/form-select/form-select.component';
import { FormRadioComponent } from './fields/form-radio/form-radio.component';
import { FormToggleComponent } from './fields/form-toggle/form-toggle.component';
import { FormCheckboxComponent } from './fields/form-checkbox/form-checkbox.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { mapValidators } from '../../utils/validators/map-validator.util';
import { FormErrorComponent } from './errors/form-error.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, FormInputComponent, FormSelectComponent, FormRadioComponent, FormToggleComponent, FormCheckboxComponent, FormErrorComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() config!: IDynamicForm;

  form?: FormGroup;

  get buttons(): IButtons[] {
    return this.config.buttons;
  }

  get fields(): IFields[] {
    return this.config.formControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {

    const group: { [key: string]: any } = {};

    this.fields.forEach(field => {
      const validators = mapValidators(field.validators || []);
      group[field.name] = this.fb.control(field.value ?? null, validators)
    });

    this.form = this.fb.group(group);
  }

  getFormControl(name: string): FormControl {
    return this.form?.get(name) as FormControl;
  }
}
