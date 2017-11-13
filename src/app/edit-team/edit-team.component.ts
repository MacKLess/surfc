import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
  providers: [TeamService]
})
export class EditTeamComponent implements OnInit {
  @Input() selectedMember;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.teamService.updateMember(memberToUpdate);
  }
}
