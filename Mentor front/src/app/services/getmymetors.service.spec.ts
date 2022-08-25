import { TestBed } from '@angular/core/testing';

import { GetmymetorsService } from './getmymetors.service';

describe('GetmymetorsService', () => {
  let service: GetmymetorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmymetorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
