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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
