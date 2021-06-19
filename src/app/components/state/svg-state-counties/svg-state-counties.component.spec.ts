<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgStateCountiesComponent } from './svg-state-counties.component';

describe('SvgStateCountiesComponent', () => {
  let component: SvgStateCountiesComponent;
  let fixture: ComponentFixture<SvgStateCountiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgStateCountiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgStateCountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
=======
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
      // declarations: [SvgStateCountiesComponent],
      providers: [HoverService,
        SvgStateCountiesComponent,
        HoverService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const stateService = jasmine.createSpyObj('StateCensusService', ['getQuote']);
    fixture = TestBed.createComponent(SvgStateCountiesComponent);
    component = fixture.componentInstance;
    component.stateFipsCode = '19';


    fixture.detectChanges();
    console.log('stateSvgData:' + component.stateSvgData);
>>>>>>> bb7c04942761fd86ff04c5b4cf30c35f44863f1c
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
