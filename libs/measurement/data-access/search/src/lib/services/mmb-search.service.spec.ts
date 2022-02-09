import { TestBed } from '@angular/core/testing';

import { MmbSearchService } from './mmb-search.service';

describe('MmbSearchService', () => {
  let service: MmbSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmbSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
