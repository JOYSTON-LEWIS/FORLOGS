import { TestBed } from '@angular/core/testing';

import { CtblogService } from './ctblog.service';

describe('CtblogService', () => {
  let service: CtblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
