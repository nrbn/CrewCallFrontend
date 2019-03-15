import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyjobsComponent } from './pages/myjobs/myjobs.component';
import { CalComponent } from './pages/cal/cal.component';

import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotespageComponent } from './pages/notespage/notespage.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'myjobs',
    component: MyjobsComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'calendar',
    component: CalComponent
  },
  {
    path: 'personal',
    component: NotespageComponent,
    data : {type : 'personal'}
  },
  {
    path: 'general',
    component: NotespageComponent,
    data : {type : 'general'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
