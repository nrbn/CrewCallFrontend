import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(apiService, dataService) {
        // this.apiService.getJobs()
        //     .subscribe(data => {
        //       this.jobs = Array.of(data);
        //       this.confirm_count = (typeof this.jobs[0].confirm_job.length === 'undefined') ? 0 : this.jobs[0].confirm_job.length;
        //       this.interested_count = (typeof this.jobs[0].interested.length === 'undefined') ? 0 : this.jobs[0].interested.length;
        //     }, error => console.error(error));
        var _this = this;
        this.apiService = apiService;
        this.dataService = dataService;
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