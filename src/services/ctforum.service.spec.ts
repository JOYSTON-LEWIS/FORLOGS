import { TestBed } from '@angular/core/testing';

import { CtforumService } from './ctforum.service';

describe('CtforumService', () => {
  let service: CtforumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtforumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
