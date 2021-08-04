import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinblogComponent } from './genshinblog.component';

describe('GenshinblogComponent', () => {
  let component: GenshinblogComponent;
  let fixture: ComponentFixture<GenshinblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenshinblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenshinblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
