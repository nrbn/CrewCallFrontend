import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { APIService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
var NotesComponent = /** @class */ (function () {
    function NotesComponent(apiService, dataService) {
        this.apiService = apiService;
        this.dataService = dataService;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        this.apiService.getNotes()
            .subscribe(function (data) {
            _this.notes$ = (data);
            _this.dataService.changeNotesArray(data);
            if (_this.filter === "personal") {
                _this.notes$ = _this.notes$.personal;
            }
            else if (_this.filter === "general") {
                _this.notes$ = _this.notes$.general;
            }
            if (_this.limited) {
                _this.limit = 5;
            }
            else {
                _this.limit = _this.notes$.length;
            }
        });
        this.dataService.currentNotesArray.subscribe(function (array) {
            console.log(array);
        });
    };
    NotesComponent.prototype.arhiveNote = function (url, index) {
        var _this = this;
        var element = document.getElementById("item-" + index);
        $(element).addClass("animated zoomOut");
        this.apiService.archiveNote(url)
            .subscribe(function (data) {
            _this.getNotes();
        }, function (error) { return console.error(error); });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NotesComponent.prototype, "filter", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NotesComponent.prototype, "limited", void 0);
    NotesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [APIService, DataService])
    ], NotesComponent);
    return NotesComponent;
}());
export { NotesComponent };
//# sourceMappingURL=notes.component.js.map