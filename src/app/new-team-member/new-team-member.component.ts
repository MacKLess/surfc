import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-new-team-member',
  templateUrl: './new-team-member.component.html',
  styleUrls: ['./new-team-member.component.css'],
  providers: [TeamService]
})

export class NewTeamMemberComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  addMember(name: string, positionType: string, position: string, alternatePosition: string, seniority: string){
    var newMember: Member = new Member(name, positionType, position, alternatePosition, seniority);
    this.teamService.addMember(newMember);
  }


}
