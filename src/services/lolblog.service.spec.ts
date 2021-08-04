import { TestBed } from '@angular/core/testing';

import { LolblogService } from './lolblog.service';

describe('LolblogService', () => {
  let service: LolblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
