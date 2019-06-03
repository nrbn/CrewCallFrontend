import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
var JobslogComponent = /** @class */ (function () {
    function JobslogComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.jobslog = [];
        this.apiService.getJobsLog()
            .subscribe(function (data) {
            _this.jobslog = Array.of(data);
        }, function (error) { return console.error(error); });
    }
    JobslogComponent.prototype.ngOnInit = function () {
    };
    JobslogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-jobslog',
            templateUrl: './jobslog.component.html',
            styleUrls: ['./jobslog.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], JobslogComponent);
    return JobslogComponent;
}());
export { JobslogComponent };
//# sourceMappingURL=jobslog.component.js.map