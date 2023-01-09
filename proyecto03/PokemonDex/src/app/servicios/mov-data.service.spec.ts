import { TestBed } from '@angular/core/testing';

import { MovDataService } from './mov-data.service';

describe('MovDataService', () => {
  let service: MovDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
