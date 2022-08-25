import { TestBed } from '@angular/core/testing';

import { AddmentorService } from './addmentor.service';

describe('AddmentorService', () => {
  let service: AddmentorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmentorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
