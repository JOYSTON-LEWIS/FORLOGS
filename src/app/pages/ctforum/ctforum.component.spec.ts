import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtforumComponent } from './ctforum.component';

describe('CtforumComponent', () => {
  let component: CtforumComponent;
  let fixture: ComponentFixture<CtforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
