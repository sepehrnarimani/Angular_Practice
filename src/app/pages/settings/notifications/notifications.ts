import { Component, inject, signal, computed } from '@angular/core';
import { NotificationCardComponent } from '../../../components/notification-card/notification-card';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";
import { BreakpointObserver } from '@angular/cdk/layout';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [NotificationCardComponent, SettingsSidebar, NavbarComponent, CheckboxModule, FormsModule],
  templateUrl: './notifications.html',
})
export class NotificationsSettingsComponent {
  // ✅ CONVERT EXISTING TO SIGNALS (NO DESIGN CHANGES)
  newFeatures = signal(true);
  changelog = signal(false);
  maintenance = signal(true);

  securityAlerts = signal(true);
  loginNotifications = signal(true);

  NewsLetter = signal(false);
  specialOffers = signal(false);
  Events = signal(true);

  private breakpointObserver = inject(BreakpointObserver);
  isException = signal(false);

  // ✅ SECTION 1: PRODUCT UPDATES
  productUpdatesAllSelected = computed(() => 
    this.newFeatures() && this.changelog() && this.maintenance()
  );
  
  productUpdatesSomeSelected = computed(() => 
    this.newFeatures() || this.changelog() || this.maintenance()
  );
  
  toggleAllProductUpdates() {
    const newState = !this.productUpdatesAllSelected();
    this.newFeatures.set(newState);
    this.changelog.set(newState);
    this.maintenance.set(newState);
  }

  // ✅ SECTION 2: SECURITY
  securityAllSelected = computed(() => 
    this.securityAlerts() && this.loginNotifications()
  );
  
  securitySomeSelected = computed(() => 
    this.securityAlerts() || this.loginNotifications()
  );
  
  toggleAllSecurity() {
    const newState = !this.securityAllSelected();
    this.securityAlerts.set(newState);
    this.loginNotifications.set(newState);
  }

  // ✅ SECTION 3: MARKETING
  marketingAllSelected = computed(() => 
    this.NewsLetter() && this.specialOffers() && this.Events()
  );
  
  marketingSomeSelected = computed(() => 
    this.NewsLetter() || this.specialOffers() || this.Events()
  );
  
  toggleAllMarketing() {
    const newState = !this.marketingAllSelected();
    this.NewsLetter.set(newState);
    this.specialOffers.set(newState);
    this.Events.set(newState);
  }

  constructor() {
    this.breakpointObserver
      .observe('(min-width: 768px) and (max-width: 880px)')
      .subscribe(result => {
        this.isException.set(result.matches);
      });
  }
}