import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StateCountiesCensusListComponent } from './state-counties-census-list.component';
import { StateCensusDataService } from 'src/app/services/state-census-data.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { noop } from 'rxjs';


describe('StateCountiesCensusListComponent', () => {
  let component: StateCountiesCensusListComponent;
  let fixture: ComponentFixture<StateCountiesCensusListComponent>;
  let stateCensusDataService: StateCensusDataService;
  let httpTestingController: HttpTestingController;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StateCountiesCensusListComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCountiesCensusListComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    stateCensusDataService = TestBed.inject(StateCensusDataService);
    component = fixture.componentInstance;
    component.stateData = {
      id: 4,
      stateFipsCode: '19',
      stateName: 'Iowa',
      postalCode: 'IA',
      numberOfCounties: 99,
      census2010POP: 12345,
      populationEstimate2019: 8765,
      domesticMigration2010: 3523345,
      domesticMigration2019: 3456,
      internationalMigration2010: 634365465,
      internationalMigration2019: 4653453,
      landAreaSqMi: 34255235,
      fillColor: 'lightblue'
    };

    component.dataSource.data[0] = {
      id: 345,
      stateCountyFipsCode: '23456',
      stateFipsCode: '23',
      countyFipsCode: '456',
      stateName: 'Something',
      statePostalCode: 'SG',
      countyName: 'Mycnty',
      numberOfCities: 23,
      census2010POP: 3453,
      populationEstimate2019: 5647,
      domesticMigration2010: 2445,
      domesticMigration2019: 7865,
      internationalMigration2010: 632,
      internationalMigration2019: 685,
      totalMigration2019: 795,
      landAreaSqMi: 746,
      fillColor: 'lightblue',
      cities: [{
        cityName: 'Creston',
        statePostalCode: '50801',
        stateName: 'Iowa',
        stateCountyFipsCode: '66',
        stateCountyFipsAllCds: '33234|32210',
        countyName: 'Union',
        countyNamesAll: 'Union',
        latitue: 43.2413,
        longitude: -124.6698,
        population: 65788,
        popDensity: 45.76,
        military: false,
        incorporated: false,
        timezone: '-6centrl',
        ranking: 2,
        zipCodes: '50801',
      }],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
