# Angular NgRx + Dynamic Forms Structure

This project uses **NgRx** for state management and a **Dynamic Form System** for reusable, configurable forms.

---

## 📂 Project Structure

```plaintext
src/app/
│── core/
│── shared/
│   └── dynamic-form/
│       ├── dynamic-form.component.ts
│       ├── dynamic-form.component.html
│       ├── dynamic-form.types.ts
│       ├── fields/
│       │   ├── input/
│       │   │   ├── input.component.ts
│       │   │   ├── input.component.html
│       │   │   └── input.component.scss
│       │   ├── select/
│       │   │   ├── select.component.ts
│       │   │   ├── select.component.html
│       │   │   └── select.component.scss
│       │   ├── checkbox/
│       │   │   ├── checkbox.component.ts
│       │   │   ├── checkbox.component.html
│       │   │   └── checkbox.component.scss
│       │   └── ... (other field types)
│
│── state/
│   ├── app.actions.ts
│   ├── app.reducer.ts
│   ├── app.effects.ts
│   ├── app.selectors.ts
│   └── app.store.ts
```

---

## ⚡ Dynamic Form Usage

### 1. Define Field Configs

```ts
// form-config.ts
import { DynamicFieldConfig } from './dynamic-form/dynamic-form.types';

export const loginFormConfig: DynamicFieldConfig[] = [
  {
    type: 'input',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    inputType: 'email',
    validators: ['required', 'email']
  },
  {
    type: 'input',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    inputType: 'password',
    validators: ['required', 'minLength:6']
  },
  {
    type: 'checkbox',
    name: 'remember',
    label: 'Remember Me'
  }
];
```

---

### 2. Render Form

```html
<!-- app.component.html -->
<app-dynamic-form
  [config]="loginFormConfig"
  (submitted)="onLogin($event)">
</app-dynamic-form>
```

---

### 3. Handle Submission

```ts
// app.component.ts
import { Component } from '@angular/core';
import { loginFormConfig } from './form-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loginFormConfig = loginFormConfig;

  onLogin(value: any) {
    console.log('Form submitted:', value);
  }
}
```

---

## ✅ Supported Field Types

- **Input** (`text`, `email`, `password`, `date`, `time`)
- **Select**
- **Checkbox**
- Can extend with more field types (radio, textarea, toggle, etc.)

---

## 🔗 NgRx Integration (Concept)

- Forms can be connected to NgRx state for persistence.  
- Example: saving login form values into `auth` slice.  

```ts
// auth.actions.ts
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string; remember: boolean }>()
);
```

```ts
// app.component.ts
onLogin(value: any) {
  this.store.dispatch(login(value));
}
```

---

## 🚀 Benefits

- **Reusable** — One form component, many configurations.  
- **Maintainable** — New fields added via config only.  
- **NgRx Ready** — State-driven forms for complex apps.  
