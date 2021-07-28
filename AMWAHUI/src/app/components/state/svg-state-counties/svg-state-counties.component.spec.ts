import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StateCensusDataService, StateCensusData, StateSVGdata } from 'src/app/services/state-census-data.service';
import { SvgStateCountiesComponent } from './svg-state-counties.component';
import { HoverService } from 'src/app/services/hover.service';
describe('SvgStateCountiesComponent', () => {
  let stateCensusDataService: Partial<StateCensusDataService>;

  let component: SvgStateCountiesComponent;
  let fixture: ComponentFixture<SvgStateCountiesComponent>;
  let service: HoverService;
  let hoverService: HoverService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      RouterTestingModule.withRoutes([])],
      declarations: [SvgStateCountiesComponent
      ],
      providers: [HoverService,
        SvgStateCountiesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    const stateService = jasmine.createSpyObj('StateCensusService', ['getQuote']);
    fixture = TestBed.createComponent(SvgStateCountiesComponent);
    component = fixture.componentInstance;
    component.stateFipsCode = '19';


    fixture.detectChanges();
    console.log('stateSvgData:' + component.stateSvgData);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
