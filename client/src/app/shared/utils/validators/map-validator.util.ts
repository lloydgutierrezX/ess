import { ValidatorFn, Validators } from "@angular/forms"
import { matchValidator } from "./match-validator.util";

export const mapValidators = (validatorKeys: string[]): ValidatorFn[] => {
  return validatorKeys.map(key => {

    if (key.startsWith('match:')) {
      const fieldName = key.split(':')[1];
      return matchValidator(fieldName);
    }

    switch (true) {
      case key === 'required':
        return Validators.required;

      case key === 'number':
        return Validators.pattern(/^\d+$/);

      case key === 'email':
        return Validators.email;

      case key === 'mobilePH':
        return Validators.pattern(/^\+639\d{9}$/);

      case key === 'password':
        return Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);

      case key.startsWith('minLength'):
        return buildValidator(key, Validators.minLength);

      case key.startsWith('maxLength'):
        return buildValidator(key, Validators.maxLength);

      case key.startsWith('min'):
        return buildValidator(key, Validators.min);

      case key.startsWith('max'):
        return buildValidator(key, Validators.max);

      default:
        return Validators.nullValidator;
    }
  });
}

const buildValidator = (key: string, fn: (v: number) => ValidatorFn) => {
  const v = getValidatorValue(key);
  return v === -1 ? Validators.nullValidator : fn(Number(v));
}

const getValidatorValue = (validation: string): number => {
  const [, v] = validation.split(':');
  return !v || Number.isNaN(Number(v)) ? -1 : Number(v);
}