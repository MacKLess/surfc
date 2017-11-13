import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Member } from '../member.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [TeamService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
      console.log(this.router.url);
    });
    this.memberToDisplay = this.teamService.getMemberById(this.memberId);
  }

}
