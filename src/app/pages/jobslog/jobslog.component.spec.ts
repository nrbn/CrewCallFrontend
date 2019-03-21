import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobslogComponent } from './jobslog.component';

describe('JobslogComponent', () => {
  let component: JobslogComponent;
  let fixture: ComponentFixture<JobslogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobslogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
