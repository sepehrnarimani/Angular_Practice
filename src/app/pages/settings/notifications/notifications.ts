import { Component } from '@angular/core';
import { NotificationCardComponent } from '../../../components/notification-card/notification-card';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";

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

}
