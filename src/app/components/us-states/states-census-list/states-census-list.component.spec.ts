<<<<<<< HEAD
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
=======
import { fakeAsync, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8
import { RouterTestingModule } from '@angular/router/testing';
import { StatesCensusListComponent } from './states-census-list.component';
import { StateCensusDataService } from 'src/app/services/state-census-data.service';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { of, throwError } from 'rxjs';
>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('StatesCensusListComponent', () => {
  let component: StatesCensusListComponent;
  let fixture: ComponentFixture<StatesCensusListComponent>;
  let stateCensusDataService: StateCensusDataService;
  let httpTestingController: HttpTestingController;
<<<<<<< HEAD
=======
  // let getQuoteSpy: jasmine.Spy;
  // let quoteEl: HTMLElement;
  // let testQuote: string;

>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StatesCensusListComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
      // providers: [StatesListComponent, { provide: StatesCensusDataService }],
    }).compileComponents();
<<<<<<< HEAD

=======
  }));
>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8



    beforeEach(() => {
<<<<<<< HEAD

      // Create a fake TwainService object with a `getQuote()` spy
      const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
      // Make the spy return a synchronous Observable with the test data
      getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));

      TestBed.configureTestingModule({
        declarations: [TwainComponent],
        providers: [{ provide: TwainService, useValue: twainService }]
      });

      fixture = TestBed.createComponent(TwainComponent);
      component = fixture.componentInstance;
      quoteEl = fixture.nativeElement.querySelector('.twain');
    });
=======
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
>>>>>>> f45e30d164208183ccc675f6c4d5e070727134b8




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
