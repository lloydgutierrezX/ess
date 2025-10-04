import { IDynamicForm } from "../../../shared/models/DynamicForm.model";

export const loginFormConfig: IDynamicForm = {
  name: 'login-form',
  formControl: [
    // {
    //   name: 'text-input',
    //   label: {
    //     topLeft: 'Full name',
    //     topRight: 'Required',
    //     bottomLeft: 'No numbers allowed',
    //   },
    //   placeholder: 'Put fullname here',
    //   disabled: false,
    //   readonly: false,
    //   type: 'text'
    // },
    // {
    //   name: 'email-input',
    //   label: {
    //     topLeft: 'Email',
    //     topRight: 'Required',
    //     bottomLeft: 'Must be a valid email',
    //   },
    //   placeholder: 'Type here...',
    //   disabled: false,
    //   readonly: false,
    //   type: 'email',
    //   validators: ['required', 'email'],
    //   icon: 'Mail'
    // },
    // {
    //   name: 'password-input',
    //   label: {
    //     topLeft: 'Password',
    //     topRight: 'Required',
    //     bottomLeft: 'click eye to view your password',
    //   },
    //   placeholder: 'Type here your password',
    //   disabled: false,
    //   readonly: true,
    //   type: 'password',
    //   value: 'mypassword'
    // },
    // {
    //   name: 'Date picker',
    //   label: {
    //     topLeft: 'Date of Birth',
    //     topRight: 'Required',
    //     bottomLeft: '',
    //   },
    //   disabled: false,
    //   readonly: false,
    //   type: 'date',
    //   icon: 'Calendar'
    // },
    // {
    //   name: 'time-picker',
    //   label: {
    //     topLeft: 'Time of Meeting',
    //     topRight: 'Required',
    //     bottomLeft: '',
    //   },
    //   disabled: true,
    //   readonly: true,
    //   type: 'time',
    //   icon: 'Clock'
    // },
    // {
    //   name: 'radio-input',
    //   label: {
    //     topLeft: 'Gender',
    //     topRight: 'Select one',
    //     bottomLeft: 'Pick your gender',
    //   },
    //   placeholder: 'Male / Female?',
    //   disabled: false,
    //   readonly: false,
    //   type: 'radio',
    //   options: [
    //     {
    //       label: 'Male',
    //       value: 'male',
    //       style: 'color-blue'
    //     },
    //     {
    //       label: 'Female',
    //       value: 'female',
    //       style: 'color-red'
    //     }
    //   ],
    //   orientation: 'vertical'
    // },
    // {
    //   name: 'select-input',
    //   label: {
    //     topLeft: 'Favorite fruit',
    //     topRight: 'Select one',
    //     bottomLeft: 'Choose carefully',
    //   },
    //   placeholder: 'What is your favorite fruit',
    //   disabled: false,
    //   readonly: false,
    //   type: 'select',
    //   options: [
    //     {
    //       label: 'Apple',
    //       value: 'apple',
    //       style: 'bg-red-100 text-red-700 font-bold'
    //     },
    //     {
    //       label: 'Banana',
    //       value: 'banana',
    //       style: 'bg-blue-100 text-red-400 font-extra-bold'
    //     },
    //     {
    //       label: 'Orange',
    //       value: 'orange',
    //       style: 'bg-orange-100 text-orange-700 font-bold'
    //     },
    //   ],
    //   value: 'banana'
    // },
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
      checked: false,
      checkboxLabel: 'I accept the terms and conditions',
    },
    // {
    //   name: 'toggle-input',
    //   label: {
    //     topLeft: 'Enable Notifications',
    //     topRight: 'Optional',
    //     bottomLeft: 'Turn on to recieve updates',
    //   },
    //   placeholder: 'notification settings',
    //   disabled: false,
    //   readonly: false,
    //   toggleLabel: 'Notifications',
    //   type: 'toggle',
    //   checked: true
    // },
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