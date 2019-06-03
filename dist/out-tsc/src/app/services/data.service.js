import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService() {
        this.myjob_count = new BehaviorSubject(0);
        this.current_myjob_count = this.myjob_count.asObservable();
        this.confirm_jobs_count = new BehaviorSubject(0);
        this.current_confirm_jobs_count = this.confirm_jobs_count.asObservable();
        this.signup_jobs_count = new BehaviorSubject(0);
        this.current_signup_jobs_count = this.signup_jobs_count.asObservable();
        this.signedup_jobs_count = new BehaviorSubject(0);
        this.current_signedup_jobs_count = this.signedup_jobs_count.asObservable();
        this.notesArray = new BehaviorSubject([]);
        this.currentNotesArray = this.notesArray.asObservable();
    }
    DataService.prototype.changeMy_Jobs_Count = function (count) {
        this.myjob_count.next(count);
    };
    DataService.prototype.changeConfirm_Jobs_Count = function (count) {
        this.confirm_jobs_count.next(count);
    };
    DataService.prototype.changeSignup_Jobs_Count = function (count) {
        this.signup_jobs_count.next(count);
    };
    DataService.prototype.changeSignedup_Jobs_Count = function (count) {
        this.signedup_jobs_count.next(count);
    };
    DataService.prototype.changeNotesArray = function (array) {
        this.notesArray.next(array);
    };
    DataService.prototype.getMonthsList = function () {
        return ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map