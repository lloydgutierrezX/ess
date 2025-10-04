import { Component, Input, OnInit } from '@angular/core';
import { IToggleField } from '../../../../models/DynamicForm.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../../../icons/icon.component";

@Component({
  selector: 'app-form-toggle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-toggle.component.html',
  styleUrl: './form-toggle.component.scss'
})
export class FormToggleComponent {
  @Input() formControl!: FormControl;
  @Input() config!: IToggleField;

  get label(): string | null {
    return this.config?.toggleLabel ?? null;
  }

  get disabled(): boolean {
    console.log(this.config?.disabled);
    return this.config?.disabled ?? false;
  }
}
