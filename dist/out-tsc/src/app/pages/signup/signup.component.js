import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.JobType = "signup";
        this.signupActive = true;
        this.signedupActive = false;
        this.months = [];
        this.selectedMonth = -1;
        this.dataService.current_signup_jobs_count.subscribe(function (count) { return _this.signup_count = count; });
        this.dataService.current_signedup_jobs_count.subscribe(function (count) { return _this.signedup_count = count; });
        this.months = dataService.getMonthsList();
    }
    SignupComponent.prototype.ngOnInit = function () {
        $('.selectpicker').selectpicker();
    };
    SignupComponent.prototype.changeJobType = function (event) {
        this.JobType = event.target.value;
        this.signedupActive = !this.signedupActive;
        this.signupActive = !this.signupActive;
    };
    SignupComponent.prototype.filterMonth = function (value) {
        this.selectedMonth = value;
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map