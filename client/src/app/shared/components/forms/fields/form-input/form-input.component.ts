import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IInputField, IInputType } from '../../../../models/DynamicForm.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../../../icons/icon.component";

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, IconComponent, IconComponent],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent implements OnInit {

  @Input() formControl!: FormControl;
  @Input() config!: IInputField;

  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  get name(): string {
    return this.config.name;
  }

  get value(): string | number | boolean {
    return this.config.value ?? '';
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

  _icon = '';
  get icon(): string | undefined {
    return this._icon ?? undefined;
  }

  set icon(icon: string) {
    this._icon = icon;
  }

  _type: IInputType = 'text';
  get type(): IInputType {
    return this._type;
  }

  set type(type: IInputType) {
    this._type = type;
  }

  _showPassword = false;
  get showPassword(): boolean {
    return this._showPassword;
  }

  set showPassword(show: boolean) {
    this._showPassword = show;
  }

  ngOnInit(): void {
    if (!this.formControl) {
      throw new Error("FormControl is required for FormInputComponent");
    }

    this.type = this.config.type || 'text';
    this.icon = this.type === 'password' ? 'eye-off' : this.config.icon ?? '';
  }

  onClick(): boolean | void {

    if (this.disabled) {
      return false;
    }

    if (this.config.type == 'password') {
      this.icon = this.icon === 'eye' ? 'eye-off' : 'eye';
      this.showPassword = !this.showPassword;
      this.type = this.showPassword ? 'text' : 'password';
    } else if (this.config.type === 'date' || this.config.type === 'time') {
      this.inputElement.nativeElement.showPicker?.();
    }
  }
}
