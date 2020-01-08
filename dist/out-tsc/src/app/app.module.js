import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import { MomentModule } from 'angular2-moment';
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
import { FilesComponent } from './pages/files/files.component';
import { PasswordComponent } from './pages/password/password.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                JobslogComponent,
                FilesComponent,
                PasswordComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FullCalendarModule,
                FormsModule,
                ReactiveFormsModule,
                MomentModule
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map