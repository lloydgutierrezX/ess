import { Component, Input, InputOptions } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IInputField, IOption, ISelectField } from '../../../../models/DynamicForm.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss'
})
export class FormSelectComponent {
  @Input() formControl!: FormControl;
  @Input() config!: ISelectField;

  get placeholder(): string {
    return this.config.placeholder ?? '';
  }

  get disabled(): boolean {
    return this.config.disabled ?? false;
  }

  get value(): string | number | boolean | null {
    return this.formControl?.value ?? null
  }

  get options(): IOption[] {
    return this.config.options ?? [];
  }
}
