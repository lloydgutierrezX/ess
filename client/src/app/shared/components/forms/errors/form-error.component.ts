import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent {
  @Input() errors: ValidationErrors | null = null;

  checkMobilePattern(pattern: string): boolean {
    return pattern.includes('\\+639\\d{9}');
  }

  checkPasswordPattern(pattern: string): boolean {
    return pattern.includes('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/');
  }
}
