import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.meModel = [];
        this.navbarModel = {};
        this.apiService.getUserInfo()
            .subscribe(function (data) {
            _this.meModel = Array.of(data);
            _this.navbarModel.firstname = _this.meModel[0].firstname;
            _this.navbarModel.lastname = _this.meModel[0].lastname;
            _this.navbarModel.fullname = _this.meModel[0].firstname + " " + _this.meModel[0].lastname;
        }, function (error) { return console.error(error); });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map