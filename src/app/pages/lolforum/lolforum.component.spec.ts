import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolforumComponent } from './lolforum.component';

describe('LolforumComponent', () => {
  let component: LolforumComponent;
  let fixture: ComponentFixture<LolforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
