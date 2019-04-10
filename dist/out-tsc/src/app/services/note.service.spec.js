import { TestBed } from '@angular/core/testing';
import { NoteService } from './note.service';
describe('NoteService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NoteService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=note.service.spec.js.map