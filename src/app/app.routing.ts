import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './team-list/team-list.component';
import { AboutComponent } from './about/about.component';
import { NewTeamMemberComponent } from './new-team-member/new-team-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'new-team-member',
    component: NewTeamMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
