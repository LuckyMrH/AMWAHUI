import { TestBed } from '@angular/core/testing';

import { StateCensusDataService } from './state-census-data.service';

describe('StateCensusDataService', () => {
  let service: StateCensusDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateCensusDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
