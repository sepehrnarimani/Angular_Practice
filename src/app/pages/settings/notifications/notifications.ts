import { Component, inject, signal } from '@angular/core';
import { NotificationCardComponent } from '../../../components/notification-card/notification-card';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [NotificationCardComponent, SettingsSidebar, NavbarComponent],
  templateUrl: './notifications.html',
})
export class NotificationsSettingsComponent {
  newFeatures = true;
  changelog = false;
  maintenance = true;

  securityAlerts = true;
  loginNotifications = true;

  NewsLetter = false;
  specialOffers = false;
  Events = true;

  private breakpointObserver = inject(BreakpointObserver);

  isException = signal(false);

  constructor() {
    this.breakpointObserver
      .observe('(min-width: 768px) and (max-width: 880px)')
      .subscribe(result => {
        this.isException.set(result.matches);
      });
  }

}
