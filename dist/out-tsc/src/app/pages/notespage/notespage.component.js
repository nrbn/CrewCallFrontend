import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var NotespageComponent = /** @class */ (function () {
    function NotespageComponent(route) {
        var _this = this;
        this.route = route;
        this.type = "";
        this.route
            .data
            .subscribe(function (v) {
            _this.type = v.type;
        });
    }
    NotespageComponent.prototype.ngOnInit = function () {
    };
    NotespageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-notespage',
            templateUrl: './notespage.component.html',
            styleUrls: ['./notespage.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], NotespageComponent);
    return NotespageComponent;
}());
export { NotespageComponent };
//# sourceMappingURL=notespage.component.js.map