import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authSrvc = inject(AuthService);
  const router = inject(Router);

  if (!authSrvc.isLoggedIn()) {
    const returnUrl = state.url === '/' || state.url === '' ? '/dashboard' : state.url;
    return router.createUrlTree(['/login'], {
      queryParams: { returnUrl }
    });
  }

  return true;
};
