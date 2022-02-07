import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HoverService } from './hover.service';

describe('HoverService', () => {
  let service: HoverService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HoverService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
