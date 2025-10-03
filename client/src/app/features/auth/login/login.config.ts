import { IDynamicForm } from "../../../shared/models/DynamicForm.model";

export const loginFormConfig: IDynamicForm = {
  name: 'login-form',
  formControl: [
    {
      name: 'text-input',
      label: {
        topLeft: 'Full name',
        topRight: 'Required',
        bottomLeft: 'No numbers allowed',
      },
      placeholder: 'Put fullname here',
      disabled: false,
      readonly: false,
      type: 'text'
    },
    {
      name: 'email-input',
      label: {
        topLeft: 'Email',
        topRight: 'Required',
        bottomLeft: 'Must be a valid email',
      },
      placeholder: 'Type here...',
      disabled: false,
      readonly: false,
      type: 'email',
      validators: ['required', 'email']
    },
    {
      name: 'password-input',
      label: {
        topLeft: 'Password',
        topRight: 'Required',
        bottomLeft: 'click eye to view your password',
      },
      placeholder: 'Type here your password',
      disabled: false,
      readonly: false,
      type: 'password'
    },
    {
      name: 'select-input',
      label: {
        topLeft: 'Favorite fruit',
        topRight: 'Select one',
        bottomLeft: 'Choose carefully',
      },
      placeholder: 'What is your favorite fruit',
      disabled: false,
      readonly: false,
      type: 'select',
      options: [
        {
          label: 'Apple',
          value: 'apple',
          style: 'color-red'
        },
        {
          label: 'Banana',
          value: 'banana',
          style: 'color-yellow'
        },
        {
          label: 'Orange',
          value: 'orange',
          style: 'color-orange'
        },
      ]
    },
    {
      name: 'checkbox-input',
      label: {
        topLeft: 'Accept Terms',
        topRight: 'Required',
        bottomLeft: 'You must accept to continue',
      },
      placeholder: 'This is a checkbox',
      disabled: false,
      readonly: false,
      type: 'checkbox',
      checked: true
    },
    {
      name: 'radio-input',
      label: {
        topLeft: 'Gender',
        topRight: 'Select one',
        bottomLeft: 'Pick your gender',
      },
      placeholder: 'Male / Female?',
      disabled: false,
      readonly: false,
      type: 'radio',
      options: [
        {
          label: 'Male',
          value: 'male',
          style: 'color-blue'
        },
        {
          label: 'Female',
          value: 'female',
          style: 'color-red'
        }
      ]
    },
    {
      name: 'toggle-input',
      label: {
        topLeft: 'Enable Notifications',
        topRight: 'Optional',
        bottomLeft: 'Turn on to recieve updates',
      },
      placeholder: 'notification settings',
      disabled: false,
      readonly: false,
      type: 'toggle',
      checked: true
    },
  ],
  buttons: [
    {
      type: 'button',
      label: 'button',
      style: 'btn btn-primary',
      action: () => console.log('button clicked')
    }
  ]
}