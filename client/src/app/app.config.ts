import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { Eye, EyeOff, LucideAngularModule, Mail } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([
        // 👉 later we can add your AuthInterceptor here
      ])
    ),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Eye, EyeOff, Mail
      })
    )
  ],
};