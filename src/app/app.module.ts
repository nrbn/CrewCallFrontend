import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { FullCalendarModule } from 'ng-fullcalendar';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { AppComponent } from './app.component';
import { NotesComponent } from './partials/notes/notes.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MyjobsComponent } from './pages/myjobs/myjobs.component';
import { JobsComponent } from './partials/jobs/jobs.component';
import { CalComponent } from './pages/cal/cal.component';
import { NotespageComponent } from './pages/notespage/notespage.component';

import { APIService } from './services/api.service';
import { DataService } from './services/data.service';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AbsenceComponent } from './pages/absence/absence.component';
import { JobslogComponent } from './pages/jobslog/jobslog.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MyjobsComponent,
    JobsComponent,
    CalComponent,
    ConfirmComponent,
    SignupComponent,
    NotespageComponent,
    ProfileComponent,
    AbsenceComponent,
    JobslogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [APIService, DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
