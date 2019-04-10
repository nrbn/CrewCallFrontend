import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var NoteService = /** @class */ (function () {
    function NoteService(http) {
        this.http = http;
        this._getNotesUrl = 'https://leke.crewcall.no/uf/me_messages';
        this.personalNotes = [];
        this.generalNotes = [];
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this._getNotesUrl);
    };
    NoteService.prototype.getPersonalNotes = function () {
        this.http.get('https://leke.crewcall.no/uf/me_messages').subscribe(function (data) {
            console.log(data);
            for (var _i = 0, _a = data.general; _i < _a.length; _i++) {
                var note = _a[_i];
                console.log(note);
            }
        });
    };
    NoteService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], NoteService);
    return NoteService;
}());
export { NoteService };
//# sourceMappingURL=note.service.js.map