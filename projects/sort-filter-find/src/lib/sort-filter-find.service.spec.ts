import { TestBed } from '@angular/core/testing';

import { SortFilterFindService } from './sort-filter-find.service';

describe('SortFilterFindService', () => {
  let service: SortFilterFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortFilterFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
