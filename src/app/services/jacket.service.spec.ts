import { TestBed } from '@angular/core/testing';

import { JacketService } from './jacket.service';

describe('JacketService', () => {
  let service: JacketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JacketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
