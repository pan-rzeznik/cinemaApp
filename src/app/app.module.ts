import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinemaHomeModule } from './cinema-home/cinema-home.module';
import { AdminModule } from './admin/admin.module';
import { firebaseConfig } from './../environments/firestore-config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AdminModule,
    CinemaHomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
