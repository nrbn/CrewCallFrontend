import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';
var JobsComponent = /** @class */ (function () {
    function JobsComponent(apiService, dataService) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.initialized = false;
    }
    JobsComponent.prototype.ngOnInit = function () {
        this.currentMonth = -1;
        this.filterValue = this.filter;
        this.filter_month = this.filterMonth;
        this.getJobs();
        this.initialized = true;
    };
    JobsComponent.prototype.ngOnChanges = function (changes) {
        this.currentMonth = -1;
        if (this.initialized) {
            if (typeof changes.filter !== "undefined") {
                this.filterValue = this.filter;
                this.filterValue = changes.filter.currentValue;
                this.getJobs();
            }
            if (typeof changes.filterMonth !== "undefined") {
                this.filter_month = this.filterMonth;
                this.filter_month = changes.filterMonth.currentValue;
                this.getJobsByMonth();
            }
        }
    };
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        this.apiService.getJobs()
            .subscribe(function (data) {
            // this.jobs = Array.of(data);
            // this.jobs = data;
            _this.setUpData(data);
            _this.dataService.changeConfirm_Jobs_Count(data.assigned_count);
            _this.dataService.changeMy_Jobs_Count(data.confirmed_count);
            _this.dataService.changeSignup_Jobs_Count(data.opportunities_count);
            _this.dataService.changeSignedup_Jobs_Count(data.interested_count);
        }, function (error) { return console.error(error); });
    };
    JobsComponent.prototype.getJobsByMonth = function () {
        var _this = this;
        var params = { month: +(Number(this.filter_month) + 1) };
        this.apiService.getJobsByMonth(params)
            .subscribe(function (data) {
            _this.setUpData(data);
        }, function (error) { return console.error(error); });
    };
    JobsComponent.prototype.setUpData = function (data) {
        var opportunities = data.opportunities ? data.opportunities : [];
        var interested = data.interested ? data.interested : [];
        var confirmed = data.confirmed ? data.confirmed : [];
        var assigned = data.assigned ? data.assigned : [];
        this.signUpCSRF_TOKEN = data.signup_shift._csrf_token;
        this.signUpURL = data.signup_shift.url;
        this.deleteInterestCSRF_TOKEN = data.delete_interest._csrf_token;
        this.deleteInterestURL = data.delete_interest.url;
        this.confirmCSRF_TOKEN = data.confirm_job._csrf_token;
        this.confirmURL = data.confirm_job.url;
        if (this.filterValue === "all") {
            this.jobs = this.jobs.concat(opportunities, confirmed, confirm, assigned, interested);
        }
        else if (this.filterValue === "signup") {
            this.currentMonth = -1;
            this.jobs = opportunities;
        }
        else if (this.filterValue === "confirmed") {
            this.jobs = confirmed;
        }
        else if (this.filterValue === "assigned") {
            this.jobs = assigned;
        }
        else if (this.filterValue === "signedup") {
            this.jobs = interested;
        }
        if (this.limited) {
            this.limit = 5;
        }
        else {
            this.limit = this.jobs.length;
        }
    };
    JobsComponent.prototype.sameDayCheck = function (from_, to_) {
        from_ = moment(from_, "YYYY-MM-DD").format();
        to_ = moment(to_, "YYYY-MM-DD").format();
        return moment(from_).isSame(to_);
    };
    JobsComponent.prototype.setMonth = function (month) {
        this.currentMonth = month;
    };
    JobsComponent.prototype.signUpSubmit = function (form, index) {
        var _this = this;
        if (form.valid) {
            var element = document.getElementById("item-" + index);
            $(element).addClass("animated zoomOut");
            var params = form.value;
            var url = this.signUpURL;
            url = url.replace("ID", form.value.id);
            this.apiService.postSignUpJob(url, params)
                .subscribe(function (data) {
                _this.getJobs();
            }, function (error) { return console.error(error); });
        }
    };
    JobsComponent.prototype.deleteInterestJob = function (id, index) {
        var _this = this;
        var element = document.getElementById("item-" + index);
        $(element).addClass("animated zoomOut");
        var params = { _csrf_token: this.deleteInterestCSRF_TOKEN };
        var url = this.deleteInterestURL;
        url = url.replace("ID", id);
        this.apiService.deleteInterestJob(url, params)
            .subscribe(function (data) {
            _this.getJobs();
        }, function (error) { return console.error(error); });
    };
    JobsComponent.prototype.confirmJob = function (id, index) {
        var _this = this;
        var element = document.getElementById("item-" + index);
        $(element).addClass("animated zoomOut");
        var params = { _csrf_token: this.confirmCSRF_TOKEN };
        var url = this.confirmURL;
        url = url.replace("ID", id);
        this.apiService.deleteInterestJob(url, params)
            .subscribe(function (data) {
            _this.getJobs();
        }, function (error) { return console.error(error); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JobsComponent.prototype, "filter", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JobsComponent.prototype, "filterMonth", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], JobsComponent.prototype, "limited", void 0);
    JobsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-jobs',
            templateUrl: './jobs.component.html',
            styleUrls: ['./jobs.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [APIService, DataService])
    ], JobsComponent);
    return JobsComponent;
}());
export { JobsComponent };
//# sourceMappingURL=jobs.component.js.map