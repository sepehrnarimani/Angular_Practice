import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { StatsCardComponent } from '../../components/stats-card/stats-card';
import { InfoCardComponent } from '../../components/info-card/info-card';

// NG-Icons heroicons — adjust names if your version differs
import {
  heroBolt,
  heroShieldCheck,
  heroUserGroup,
  heroCheckCircle,
} from '@ng-icons/heroicons/outline';
import { InfoItem } from "../info-item/info-item";

@Component({
  selector: 'app-description-section',
  standalone: true,
  imports: [StatsCardComponent, InfoCardComponent, InfoItem],
  templateUrl: './description-section.html',
})
export class DescriptionSectionComponent {
  headerTitle = 'Everything you need to succeed';
  headerSubtitle =
    'Powerful features that help you work smarter, move faster, and achieve more together.';

  featureCards = [
    {
      icon: heroBolt,
      title: 'Lightning Fast',
      description:
        'Built for speed and performance, delivering exceptional user experiences at scale.',
    },
    {
      icon: heroShieldCheck,
      title: 'Secure by Default',
      description:
        'Enterprise-grade security with end-to-end encryption and compliance standards.',
    },
    {
      icon: heroUserGroup,
      title: 'Team Collaboration',
      description:
        'Work together seamlessly with real-time updates and intuitive team management.',
    },
  ];

  }
