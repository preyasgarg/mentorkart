import { TestBed } from '@angular/core/testing';

import { UpdatementeeService } from './updatementee.service';

describe('UpdatementeeService', () => {
  let service: UpdatementeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatementeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
