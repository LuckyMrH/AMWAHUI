import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SvgUsCountiesComponent } from './svg-us-counties.component';
import { HoverService } from 'src/app/services/hover.service';

describe('SvgUsCountiesComponent', () => {
  let component: SvgUsCountiesComponent;
  let fixture: ComponentFixture<SvgUsCountiesComponent>;
  let service: HoverService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SvgUsCountiesComponent],
      providers: [HoverService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgUsCountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
