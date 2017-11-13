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

  getMemberById(id: string){
    return this.database.object('members/' + id);
  }

  updateMember(localUpdatedMember){
    let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                  position: localUpdatedMember.position,
                                  positionType: localUpdatedMember.positionType,
                                  alternatePosition: localUpdatedMember.alternatePosition,
                                  seniority: localUpdatedMember.seniority});
  }

  deleteMember(localMemberToDelete){
    let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
