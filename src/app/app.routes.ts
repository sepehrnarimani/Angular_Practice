import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home';

// Settings pages (no settings landing page)
import { Profile } from './pages/settings/profile/profile';
import { NotificationsSettingsComponent } from './pages/settings/notifications/notifications';
import { AppearanceComponent } from './pages/settings/appearance/appearance';

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  // Settings: redirect /settings to /settings/profile
  { path: 'settings', pathMatch: 'full', redirectTo: 'settings/profile' },

  // Settings pages
  { path: 'settings/profile', component: Profile },
  { path: 'settings/notifications', component: NotificationsSettingsComponent },
  { path: 'settings/appearance', component: AppearanceComponent },
  

  // optional: fallback
  { path: '**', redirectTo: '' },
];
