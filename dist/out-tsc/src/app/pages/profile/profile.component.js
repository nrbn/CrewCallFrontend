import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.profileModel = [];
        this.apiService.getProfile()
            .subscribe(function (data) {
            _this.profileModel = Array.of(data);
        }, function (error) { return console.error(error); });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map