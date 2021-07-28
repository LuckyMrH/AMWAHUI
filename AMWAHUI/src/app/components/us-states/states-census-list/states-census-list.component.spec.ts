import { fakeAsync, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StatesCensusListComponent } from './states-census-list.component';
import { StateCensusDataService } from 'src/app/services/state-census-data.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('StatesCensusListComponent', () => {
  let component: StatesCensusListComponent;
  let fixture: ComponentFixture<StatesCensusListComponent>;
  let stateCensusDataService: StateCensusDataService;
  let httpTestingController: HttpTestingController;
  // let getQuoteSpy: jasmine.Spy;
  // let quoteEl: HTMLElement;
  // let testQuote: string;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StatesCensusListComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
       providers: [ { provide: StateCensusDataService, useClass: StatesCensusListComponent }],
    }).compileComponents();
  }));



    beforeEach(() => {
    //   testQuote = 'Test Quote';
    //   // Create a fake TwainService object with a `getQuote()` spy
    //   const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
    //   // Make the spy return a synchronous Observable with the test data
    //   getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));

    //   TestBed.configureTestingModule({
    //     declarations: [TwainComponent],
    //     providers: [{ provide: TwainService, useValue: twainService }]
    //   });

      // fixture = TestBed.createComponent(StatesCensusListComponent);
      // component = fixture.componentInstance;
    //   quoteEl = fixture.nativeElement.querySelector('.twain');
    // });




    fixture = TestBed.createComponent(StatesCensusListComponent);
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
