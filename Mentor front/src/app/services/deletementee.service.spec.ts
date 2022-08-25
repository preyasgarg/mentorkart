import { TestBed } from '@angular/core/testing';

import { DeletementeeService } from './deletementee.service';

describe('DeletementeeService', () => {
  let service: DeletementeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletementeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
