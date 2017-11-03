import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { TeamMember } from '../team-member.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {
  team-members: FirebaseListObservable<and[]>;

  constructor(
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.team-members = this.teamService.getTeamMembers();
  }

}
