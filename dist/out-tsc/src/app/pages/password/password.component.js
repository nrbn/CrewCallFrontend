import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.apiService.getCangePassword()
            .subscribe(function (data) {
            _this.response = data;
            _this.password_CSRF_TOKEN = _this.response.fos_user_change_password._token;
        }, function (error) { return console.error(error); });
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent.prototype.changePasswordSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            var params = form.value;
            this.apiService.postCangePassword(params)
                .subscribe(function (data) {
                console.log(data);
                _this.password_reset_response_status = true;
            }, function (error) {
                _this.password_reset_response_status = false;
                _this.error_messages = Array.of(error.error.ERROR[0]);
                // this.password_CSRF_TOKEN = error.error.ERROR.fos_user_change_password.
                console.log(_this.error_messages);
                // console.error(error);
            });
        }
    };
    PasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-password',
            templateUrl: './password.component.html',
            styleUrls: ['./password.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], PasswordComponent);
    return PasswordComponent;
}());
export { PasswordComponent };
//# sourceMappingURL=password.component.js.map