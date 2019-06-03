import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(apiService, dataService) {
        var _this = this;
        this.apiService = apiService;
        this.dataService = dataService;
        this.apiService.getJobs()
            .subscribe(function (data) {
            // this.jobs = Array.of(data);
            _this.dataService.changeConfirm_Jobs_Count(data.assigned_count);
            _this.dataService.changeMy_Jobs_Count(data.confirmed_count);
            _this.dataService.changeSignup_Jobs_Count(data.opportunities_count);
            _this.dataService.changeSignedup_Jobs_Count(data.interested_count);
        }, function (error) { return console.error(error); });
        this.dataService.current_confirm_jobs_count.subscribe(function (count) { return _this.confirm_count = count; });
        this.dataService.current_myjob_count.subscribe(function (count) { return _this.myjob_count = count; });
        this.dataService.current_signup_jobs_count.subscribe(function (count) { return _this.signup_count = count; });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FooterComponent.prototype, "myjobs", void 0);
    FooterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService, DataService])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map