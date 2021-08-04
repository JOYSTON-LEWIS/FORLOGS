import { TestBed } from '@angular/core/testing';

import { GenshinblogService } from './genshinblog.service';

describe('GenshinblogService', () => {
  let service: GenshinblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
