import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TeamListComponent } from './team-list/team-list.component';
import { NewTeamMemberComponent } from './new-team-member/new-team-member.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    AboutComponent,
    NewTeamMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initalizeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
