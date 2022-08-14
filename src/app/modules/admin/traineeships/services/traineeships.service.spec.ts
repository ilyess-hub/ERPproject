import { TestBed } from '@angular/core/testing';

import { TraineeshipsService } from './traineeships.service';

describe('TraineeshipsService', () => {
  let service: TraineeshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
