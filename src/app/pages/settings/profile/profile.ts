import { Component } from '@angular/core';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";

@Component({
  selector: 'app-profile',
  imports: [SettingsSidebar, NavbarComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
