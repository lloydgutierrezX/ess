import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IOption, IRadioField } from '../../../../models/DynamicForm.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-radio',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-radio.component.html',
  styleUrl: './form-radio.component.scss'
})
export class FormRadioComponent {
  @Input() formControl!: FormControl;
  @Input() config!: IRadioField;

  get options(): IOption[] {
    return this.config.options ?? [];
  }

  get placeholder(): string {
    return this.config.placeholder ?? '';
  }

  get value(): string | number | boolean | null {
    return this.formControl?.value ?? null
  }

  get orientation(): 'horizontal' | 'vertical' {
    return this.config.orientation ?? 'horizontal';
  }

  get disabledAll(): boolean {
    return this.config.disabled ?? false;
  }
}
