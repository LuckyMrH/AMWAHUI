import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StateCensusDataService } from 'src/app/services/state-census-data.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UsCountiesCensusListComponent } from './us-counties-census-list.component';

describe('UsCountiesCensusListComponent', () => {
  let component: UsCountiesCensusListComponent;
  let fixture: ComponentFixture<UsCountiesCensusListComponent>;
  let stateCensusDataService: StateCensusDataService;
  // let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsCountiesCensusListComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCountiesCensusListComponent);
    component = fixture.componentInstance;
    // httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    stateCensusDataService = TestBed.inject(StateCensusDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
