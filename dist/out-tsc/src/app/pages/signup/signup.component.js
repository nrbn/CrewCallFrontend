import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.JobType = "signup";
        this.signupActive = true;
        this.signedupActive = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.changeJobType = function (event) {
        this.JobType = event.target.value;
        this.signedupActive = !this.signedupActive;
        this.signupActive = !this.signupActive;
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map