import { IDynamicValue } from "./Global.model";

export interface IDynamicForm {
  formControl: IFields[];
  buttons: IButtons[];
  name?: string;
}

export type IFields = IInputField | ISelectField | ICheckboxField | IToggleField | IRadioField;
export type IButtons = IDefaultButton | ILoginButton | IResetButton;

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
}

export type IInputType = 'text' | 'email' | 'password' | 'date' | 'time';

export interface IInputField extends IBaseField {
  type: IInputType;
  value?: string;
}

type IOption = {
  label: string;
  value: string;
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
}

export interface IRadioField extends IBaseField {
  type: 'radio';
  options: IOption[];
  value?: string | number | boolean;
}

export interface IToggleField extends IBaseField {
  type: 'toggle';
  checked?: boolean;
}

// Button interfaces
type IBaseButton = {
  label: string;
  style: string;
  disabled?: boolean;
}

interface IDefaultButton extends IBaseButton {
  type: 'button';
  action: (formValue?: IDynamicValue) => void;
}

interface ILoginButton extends IBaseButton {
  type: 'submit';
  action: (formValue?: IDynamicValue) => void;
}

interface IResetButton extends IBaseButton {
  type: 'reset';
  action?: (formValue?: IDynamicValue) => void;
}
