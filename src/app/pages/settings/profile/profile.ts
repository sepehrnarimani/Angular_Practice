import { Component } from '@angular/core';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";
import { ProfileEntry } from "../../../components/profile-entry/profile-entry";
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button";

@Component({
  selector: 'app-profile',
  imports: [SettingsSidebar, NavbarComponent, ProfileEntry, PrimaryButtonComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
