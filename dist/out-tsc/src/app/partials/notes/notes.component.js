import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
var NotesComponent = /** @class */ (function () {
    function NotesComponent(apiService) {
        this.apiService = apiService;
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getNotes()
            .subscribe(function (data) {
            _this.notes$ = (data);
            if (_this.filter === "personal") {
                _this.notes$ = _this.notes$.personal;
            }
            else if (_this.filter === "general") {
                _this.notes$ = _this.notes$.general;
            }
        });
    };
    NotesComponent.prototype.arhiveNote = function (url) {
        this.apiService.archiveNote(url)
            .subscribe(function (data) {
            // console.log("data", data);
        }, function (error) { return console.error(error); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NotesComponent.prototype, "filter", void 0);
    NotesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService])
    ], NotesComponent);
    return NotesComponent;
}());
export { NotesComponent };
//# sourceMappingURL=notes.component.js.map