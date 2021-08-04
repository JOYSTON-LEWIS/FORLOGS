import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinforumComponent } from './genshinforum.component';

describe('GenshinforumComponent', () => {
  let component: GenshinforumComponent;
  let fixture: ComponentFixture<GenshinforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenshinforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenshinforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
