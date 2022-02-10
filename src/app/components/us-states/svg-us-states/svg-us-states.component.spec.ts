import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SvgUsStatesComponent } from './svg-us-states.component';
import { HoverService } from 'src/app/services/hover.service';
describe('SvgUsStatesComponent', () => {
  let component: SvgUsStatesComponent;
  let fixture: ComponentFixture<SvgUsStatesComponent>;
  let service: HoverService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),],
      declarations: [SvgUsStatesComponent],
      providers: [HoverService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgUsStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
