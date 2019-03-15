import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotespageComponent } from './notespage.component';

describe('NotespageComponent', () => {
  let component: NotespageComponent;
  let fixture: ComponentFixture<NotespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
