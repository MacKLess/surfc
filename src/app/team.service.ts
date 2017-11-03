import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Member } from './member.model';

@Injectable()
export class TeamService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(member) {
    this.members.push(member);
  }

}
