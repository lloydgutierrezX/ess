import { IDynamicForm } from "../../../shared/models/DynamicForm.model";

export const loginFormConfig: IDynamicForm = {
  name: 'login-form',
  formControl: [
    {
      name: 'username-input',
      label: {
        topLeft: 'Email',
      },
      placeholder: 'Type your email here',
      type: 'email',
      validators: ['required', 'email'],
      icon: 'Mail'
    },
    {
      name: 'password-input',
      label: {
        topLeft: 'Password',
      },
      placeholder: 'Type your password',
      type: 'password',
      value: '',
      validators: ['required', 'password'],
    },
  ],
  actions: [
    {
      name: 'login',
      type: 'submit'
    },
    {
      name: 'signup',
      type: 'redirect',
      route: 'auth/sign-up'
    },
    {
      name: 'forgot-password',
      type: 'redirect',
      route: 'auth/forgot-password'
    }

  ]
}