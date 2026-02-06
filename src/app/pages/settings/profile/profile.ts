import { Component, model } from '@angular/core';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";
import { ProfileEntry } from "../../../components/profile-entry/profile-entry";
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button";
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CheckboxModule} from 'primeng/checkbox'

@Component({
  selector: 'app-profile',
  imports: [SettingsSidebar, NavbarComponent, ProfileEntry, PrimaryButtonComponent, FormsModule, SelectModule, CheckboxModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  firstName = 'John';
  lastName = 'Doe';
  email = 'john@company.com'

  timezones = [
  { label: 'America/New York', value: 'America/New York' },
  { label: 'America/Chicago', value: 'America/Chicago' },
  { label: 'America/Denver', value: 'America/Denver' },
  { label: 'America/Los Angeles', value: 'America/Los Angeles' },
  { label: 'Europe/London', value: 'Europe/London' },
  { label: 'Europe/Paris', value: 'Europe/Paris' },
  { label: 'Asia/Tokyo', value: 'Asia/Tokyo' },
  { label: 'Australia/Sydney', value: 'Australia/Sydney' },
];

  selectedTimezone = 'America/New York';

  isVisible= model(true);

}
