import { TestBed } from '@angular/core/testing';

import { LolforumService } from './lolforum.service';

describe('LolforumService', () => {
  let service: LolforumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolforumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
