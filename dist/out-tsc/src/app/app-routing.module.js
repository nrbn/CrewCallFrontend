import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyjobsComponent } from './pages/myjobs/myjobs.component';
import { CalComponent } from './pages/cal/cal.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SignupComponent } from './pages/signup/signup.component';
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
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map