import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StateCensusDataService } from './state-census-data.service';

describe('StateCensusDataService', () => {
  let service: StateCensusDataService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StateCensusDataService],
    });
    //httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StateCensusDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {

    httpTestingController.expectOne('http://localhost:8080/census/counties');
    httpTestingController.expectOne('http://localhost:8080/census/states');
    httpTestingController.expectOne('http://localhost:8080/svg/us_states');
    httpTestingController.expectOne('http://localhost:8080/svg/us_counties');
    expect(service).toBeTruthy();
  });
});
