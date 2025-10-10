import { IDynamicValue } from "./Global.model";

export type IButtons = IDefaultButton | ILoginButton | IResetButton | ILinkButton;

type IBaseButton = {
  name: string;
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

interface ILinkButton extends IBaseButton {
  type: 'link';
  action?: (formValue?: IDynamicValue) => void;
}
