import { TestBed } from '@angular/core/testing';

import { GenshinforumService } from './genshinforum.service';

describe('GenshinforumService', () => {
  let service: GenshinforumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinforumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
