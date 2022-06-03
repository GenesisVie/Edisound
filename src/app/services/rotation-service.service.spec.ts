import { TestBed } from '@angular/core/testing';

import { RotationServiceService } from './rotation-service.service';

describe('RotationServiceService', () => {
  let service: RotationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
