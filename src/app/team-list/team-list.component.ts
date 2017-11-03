import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { TeamMember } from '../team-member.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  team-members: FirebaseListObservable<and[]>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
