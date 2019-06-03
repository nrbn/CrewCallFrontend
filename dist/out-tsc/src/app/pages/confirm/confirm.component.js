import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dataService) {
        this.dataService = dataService;
        this.JobType = "assigned";
        this.selectedMonth = -1;
        this.months = dataService.getMonthsList();
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        $('.selectpicker').selectpicker();
    };
    ConfirmComponent.prototype.filterMonth = function (value) {
        this.selectedMonth = value;
    };
    ConfirmComponent = tslib_1.__decorate([
        Component({
            selector: 'app-confirm',
            templateUrl: './confirm.component.html',
            styleUrls: ['./confirm.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
export { ConfirmComponent };
//# sourceMappingURL=confirm.component.js.map