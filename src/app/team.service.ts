import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { TeamMember } from './team-member.model';

@Injectable()
export class TeamService {
  team-members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.team-members = database.list('team-members');
  }

  getTeamMembers() {
    return this.team-members;
  }

}
