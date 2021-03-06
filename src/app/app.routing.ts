import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberDetailComponent } from './member-detail/member-detail.component';
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
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
