import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
        this._getNotesUrl = '../../uf/me_notes';
        this._getUserInfoUrl = '../../uf/me';
        this._getJobsUrl = "../../uf/me_jobs";
        this._getUserProfile = '../../uf/me_profile';
        this._getJobsLog = '../../uf/me_joblog';
        this._getFiles = '../../uf/me_files';
        this._changePassword = '../../uf/me_password';
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    APIService.prototype.getNotes = function () {
        return this.http.get(this._getNotesUrl, { headers: this.headers });
    };
    APIService.prototype.archiveNote = function (archiveNoteUrl) {
        return this.http.post(archiveNoteUrl, { headers: this.headers });
    };
    APIService.prototype.getNotesInterface = function () {
        return this.http.get(this._getNotesUrl, { headers: this.headers });
    };
    APIService.prototype.getUserInfo = function () {
        return this.http.get(this._getUserInfoUrl, { headers: this.headers });
    };
    APIService.prototype.getJobs = function () {
        return this.http.get(this._getJobsUrl, { headers: this.headers });
    };
    APIService.prototype.getJobsByMonth = function (params) {
        return this.http.get(this._getJobsUrl, { headers: this.headers, params: params });
    };
    APIService.prototype.postSignUpJob = function (signUpURL, params) {
        return this.http.post(signUpURL, params);
    };
    APIService.prototype.deleteInterestJob = function (deleteInterestJobURL, params) {
        return this.http.post(deleteInterestJobURL, params);
    };
    APIService.prototype.getProfile = function () {
        return this.http.get(this._getUserProfile, { headers: this.headers });
    };
    APIService.prototype.getJobsLog = function () {
        return this.http.get(this._getJobsLog, { headers: this.headers });
    };
    APIService.prototype.getFiles = function () {
        return this.http.get(this._getFiles, { headers: this.headers });
    };
    APIService.prototype.getCangePassword = function () {
        return this.http.get(this._changePassword, { headers: this.headers });
    };
    APIService.prototype.postCangePassword = function (params) {
        return this.http.post(this._changePassword, params);
    };
    APIService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], APIService);
    return APIService;
}());
export { APIService };
//# sourceMappingURL=api.service.js.map