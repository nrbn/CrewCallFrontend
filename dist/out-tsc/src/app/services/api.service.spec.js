import { TestBed } from '@angular/core/testing';
import { APIService } from './api.service';
describe('APIService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(APIService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=api.service.spec.js.map