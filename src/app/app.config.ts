import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideIcons } from '@ng-icons/core';
import { heroBolt, heroShieldCheck, heroChartBar } from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Register icons you plan to use
    provideIcons({
      heroBolt,
      heroShieldCheck,
      heroChartBar,
    }),
  ],
};
