import { Component } from '@angular/core';
import { loginFormConfig } from './login.config';
import { DynamicFormComponent } from "../../../shared/components/forms/dynamic-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formConfig = loginFormConfig;
}
