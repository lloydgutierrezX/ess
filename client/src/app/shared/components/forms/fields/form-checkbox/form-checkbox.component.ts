import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ICheckboxField } from '../../../../models/DynamicForm.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-checkbox.component.html',
  styleUrl: './form-checkbox.component.scss'
})
export class FormCheckboxComponent {
  @Input() formControl!: FormControl;
  @Input() config!: ICheckboxField;

  get label(): string | null {
    return this.config?.checkboxLabel ?? null;
  }

  get disabled(): boolean {
    console.log(this.config?.disabled);
    return this.config?.disabled ?? false;
  }

  get style(): string {
    return this.config?.style ?? '';
  }
}
