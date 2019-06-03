import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
var FilesComponent = /** @class */ (function () {
    function FilesComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.files = [];
        this.apiService.getFiles()
            .subscribe(function (data) {
            _this.files = Array.of(data);
        }, function (error) { return console.error(error); });
    }
    FilesComponent.prototype.ngOnInit = function () {
    };
    FilesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-files',
            templateUrl: './files.component.html',
            styleUrls: ['./files.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], FilesComponent);
    return FilesComponent;
}());
export { FilesComponent };
//# sourceMappingURL=files.component.js.map