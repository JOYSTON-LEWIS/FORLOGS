import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolblogComponent } from './lolblog.component';

describe('LolblogComponent', () => {
  let component: LolblogComponent;
  let fixture: ComponentFixture<LolblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
