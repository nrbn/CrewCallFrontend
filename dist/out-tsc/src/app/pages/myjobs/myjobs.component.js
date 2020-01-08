import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
var MyjobsComponent = /** @class */ (function () {
    function MyjobsComponent(dataService) {
        this.dataService = dataService;
        this.JobType = "confirmed";
        this.selectedMonth = -1;
        this.months = dataService.getMonthsList();
    }
    MyjobsComponent.prototype.ngOnInit = function () {
        $('.selectpicker').selectpicker();
    };
    MyjobsComponent.prototype.filterMonth = function (value) {
        this.selectedMonth = value;
    };
    MyjobsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-myjobs',
            templateUrl: './myjobs.component.html',
            styleUrls: ['./myjobs.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], MyjobsComponent);
    return MyjobsComponent;
}());
export { MyjobsComponent };
//# sourceMappingURL=myjobs.component.js.map