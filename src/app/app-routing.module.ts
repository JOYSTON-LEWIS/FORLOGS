import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { AboutComponent } from './pages/about/about.component';
import { CtblogComponent } from './pages/ctblog/ctblog.component';
import { CtforumComponent } from './pages/ctforum/ctforum.component';
import { LolblogComponent } from './pages/lolblog/lolblog.component';
import { LolforumComponent } from './pages/lolforum/lolforum.component';
import { GenshinblogComponent } from './pages/genshinblog/genshinblog.component';
import { GenshinforumComponent } from './pages/genshinforum/genshinforum.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ctblog', component: CtblogComponent },
  { path: 'ctforum', component: CtforumComponent },
  { path: 'lolblog', component: LolblogComponent },
  { path: 'lolforum', component: LolforumComponent },
  { path: 'giblog', component: GenshinblogComponent },
  { path: 'giforum', component: GenshinforumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
