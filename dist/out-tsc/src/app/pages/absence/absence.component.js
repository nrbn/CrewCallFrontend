import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
var AbsenceComponent = /** @class */ (function () {
    function AbsenceComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.absences = [];
        this.apiService.getProfile()
            .subscribe(function (data) {
            _this.absences = Array.of(data);
        }, function (error) { return console.error(error); });
    }
    AbsenceComponent.prototype.ngOnInit = function () {
    };
    AbsenceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-absence',
            templateUrl: './absence.component.html',
            styleUrls: ['./absence.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], AbsenceComponent);
    return AbsenceComponent;
}());
export { AbsenceComponent };
//# sourceMappingURL=absence.component.js.map