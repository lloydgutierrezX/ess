import { IActions } from "./Actions.model";
import { IButtons } from "./Buttons.model";

export interface IDynamicForm {
  formControl: IFields[];
  actions: IActions[];
  name?: string;
}

export type IFields = IInputField | ISelectField | ICheckboxField | IToggleField | IRadioField;

// Form control field interfaces
interface IBaseField {
  name: string;
  label?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  }
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  validators?: string[];
  icon?: string;
  value?: string | number | boolean;
}

export type IInputType = 'text' | 'email' | 'password' | 'date' | 'time';

export interface IInputField extends IBaseField {
  type: IInputType;
}

export type IOption = {
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
  readonly style?: string;
}

export interface ISelectField extends IBaseField {
  type: 'select';
  options: IOption[];
  value?: string | number | boolean;
}

export interface ICheckboxField extends IBaseField {
  type: 'checkbox';
  checked?: boolean;
  checkboxLabel?: string;
  readonly style?: string;
}

export interface IRadioField extends IBaseField {
  type: 'radio';
  options: IOption[];
  orientation?: 'horizontal' | 'vertical';
}

export interface IToggleField extends IBaseField {
  type: 'toggle';
  checked?: boolean;
  toggleLabel?: string;
  readonly style?: string;
}