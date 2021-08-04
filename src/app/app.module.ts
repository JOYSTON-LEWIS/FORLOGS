import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { enableProdMode } from '@angular/core';

enableProdMode();

// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { AboutComponent } from './pages/about/about.component';

import { CtblogComponent } from './pages/ctblog/ctblog.component';
import { CtblogService } from '../../src/app/services/ctblog.service';
import { CtforumComponent } from './pages/ctforum/ctforum.component';
import { CtforumService } from './services/ctforum.service';

import { LolblogComponent } from './pages/lolblog/lolblog.component';
import { LolblogService } from './services/lolblog.service';
import { LolforumComponent } from './pages/lolforum/lolforum.component';
import { LolforumService } from './services/lolforum.service';

import { GenshinblogComponent } from './pages/genshinblog/genshinblog.component';
import { GenshinblogService } from './services/genshinblog.service';
import { GenshinforumComponent } from './pages/genshinforum/genshinforum.component';
import { GenshinforumService } from './services/genshinforum.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent,
    AboutComponent,
    CtblogComponent,
    CtforumComponent,
    LolblogComponent,
    LolforumComponent,
    GenshinblogComponent,
    GenshinforumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [CtblogService,
              CtforumService,
              LolblogService,
              LolforumService,
              GenshinblogService,
              GenshinforumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
