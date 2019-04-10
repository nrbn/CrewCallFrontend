import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
var JobsComponent = /** @class */ (function () {
    function JobsComponent(apiService, dataService, formBuilder) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.initialized = false;
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.formBuilder.group({
            'confirm_msg': new FormControl(false, Validators.required)
        });
        this.filterValue = this.filter;
        this.getJobs();
        this.initialized = true;
    };
    JobsComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            this.filterValue = this.filter;
            this.filterValue = changes.filter.currentValue;
            this.getJobs();
        }
    };
    JobsComponent.prototype.createForm = function (index) {
        return this.signUpForm[index] = this.formBuilder.group({
            'confirm_msg': new FormControl(false, Validators.required)
        });
    };
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        this.apiService.getJobs()
            .subscribe(function (data) {
            // this.jobs = Array.of(data);
            // this.jobs = data;
            var opportunities = data.opportunities ? data.opportunities : [];
            var interested = data.interested ? data.interested : [];
            var confirmed = data.confirmed ? data.confirmed : [];
            var confirm = data.confirm ? data.confirm : [];
            var assigned = data.assigned ? data.assigned : [];
            if (_this.filterValue === "all") {
                _this.jobs = _this.jobs.concat(opportunities, confirmed, confirm, assigned, interested);
            }
            else if (_this.filterValue === "signup") {
                _this.jobs = opportunities;
            }
            else if (_this.filterValue === "confirmed") {
                _this.jobs = confirmed;
            }
            else if (_this.filterValue === "confirm") {
                _this.jobs = confirm;
            }
            else if (_this.filterValue === "signedup") {
                _this.jobs = assigned;
            }
            _this.dataService.changeConfirm_Jobs_Count(confirm.length);
            _this.dataService.changeMy_Jobs_Count(confirmed.length);
            _this.dataService.changeSignup_Jobs_Count(opportunities.length);
        }, function (error) { return console.error(error); });
    };
    JobsComponent.prototype.sameDayCheck = function (from_, to_) {
        from_ = new Date(from_);
        to_ = new Date(to_);
        if (from_.getDate() === to_.getDate()) {
            return true;
        }
        return false;
    };
    JobsComponent.prototype.signUpSubmit = function (j) {
        console.log("test", j);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JobsComponent.prototype, "filter", void 0);
    JobsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-jobs',
            templateUrl: './jobs.component.html',
            styleUrls: ['./jobs.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [APIService, DataService, FormBuilder])
    ], JobsComponent);
    return JobsComponent;
}());
export { JobsComponent };
//# sourceMappingURL=jobs.component.js.map