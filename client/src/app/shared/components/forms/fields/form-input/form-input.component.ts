import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInputField, IInputType } from '../../../../models/DynamicForm.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent implements OnInit {

  @Input() formControl!: FormControl;
  @Input() config!: IInputField;
  @Output() valueChanged = new EventEmitter<string>();

  get name(): string {
    return this.config.name;
  }

  get value(): string | undefined {
    return this.config.value ?? '';
  }

  get type(): IInputType {
    return this.config.type;
  }

  get placeholder(): string {
    return this.config.placeholder ?? '';
  }

  get readonly(): boolean {
    return this.config.readonly ?? false;
  }

  get disabled(): boolean {
    return this.config.disabled ?? false;
  }

  ngOnInit(): void {
    if (!this.formControl) {
      throw new Error("FormControl is required for FormInputComponent");
    }

    // this.formControl.valueChanges.subscribe(value => {
    //   this.valueChanged.emit(value);
    // });
  }
}
