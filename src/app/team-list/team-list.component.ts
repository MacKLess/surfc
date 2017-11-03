import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Member } from '../member.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.members = this.teamService.getMembers();
  }

}
