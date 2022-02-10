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
<<<<<<< HEAD
  let httpClient: HttpClient;
=======
  // let httpClient: HttpClient;
>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8
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
<<<<<<< HEAD
    httpClient = TestBed.get(HttpClient);
=======
    // httpClient = TestBed.get(HttpClient);
>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8
    httpTestingController = TestBed.inject(HttpTestingController);
    stateCensusDataService = TestBed.inject(StateCensusDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
