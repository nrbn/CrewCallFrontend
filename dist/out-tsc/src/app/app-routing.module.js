import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyjobsComponent } from './pages/myjobs/myjobs.component';
import { CalComponent } from './pages/cal/cal.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotespageComponent } from './pages/notespage/notespage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AbsenceComponent } from './pages/absence/absence.component';
import { JobslogComponent } from './pages/jobslog/jobslog.component';
import { FilesComponent } from './pages/files/files.component';
import { PasswordComponent } from './pages/password/password.component';
var routes = [
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
        data: { type: 'personal' }
    },
    {
        path: 'general',
        component: NotespageComponent,
        data: { type: 'general' }
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'profile/absence',
        component: AbsenceComponent
    },
    {
        path: 'profile/jobslog',
        component: JobslogComponent,
    },
    {
        path: 'profile/files',
        component: FilesComponent
    },
    {
        path: 'profile/password',
        component: PasswordComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map